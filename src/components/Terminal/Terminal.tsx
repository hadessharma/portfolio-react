import React, { useState, useEffect, useRef } from 'react';
import profilePic from '../../assets/profile-pic.png';

interface CommandHistory {
    cmd: string;
    output: React.ReactNode;
}

import { projects } from '../data/projectData';

interface FileSystemNode {
    type: 'file' | 'directory';
    name: string;
    content?: string | React.ReactNode;
    children?: { [key: string]: FileSystemNode };
    parent?: FileSystemNode | null;
}

const Terminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandHistory[]>([]);
    const [currentPath, setCurrentPath] = useState<string[]>(['~']);
    const [fileSystem, setFileSystem] = useState<FileSystemNode | null>(null);
    const [isBooting, setIsBooting] = useState(true);
    const [bootLines, setBootLines] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Initialize File System
    useEffect(() => {
        const linkify = (text: string) => {
            const urlRegex = /(https?:\/\/[^\s"]+)/g;
            return text.split(urlRegex).map((part, i) => {
                if (part.match(urlRegex)) {
                    return (
                        <a
                            key={i}
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline cursor-pointer relative z-50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {part}
                        </a>
                    );
                }
                return part;
            });
        };
        const root: FileSystemNode = {
            type: 'directory',
            name: '~',
            children: {},
            parent: null // Root has no parent
        };

        // Create Projects Directory
        const projectsDir: FileSystemNode = {
            type: 'directory',
            name: 'projects',
            children: {},
            parent: root
        };
        root.children!['projects'] = projectsDir;

        projects.forEach(project => {
            const projectDir: FileSystemNode = {
                type: 'directory',
                name: project.name.toLowerCase().replace(/\s+/g, '-'),
                children: {},
                parent: projectsDir
            };

            // details.json
            projectDir.children!['details.json'] = {
                type: 'file',
                name: 'details.json',
                content: linkify(JSON.stringify(project, null, 2)),
                parent: projectDir
            };

            // readme.md (using info as content)
            projectDir.children!['readme.md'] = {
                type: 'file',
                name: 'readme.md',
                content: project.info.join('\n\n'),
                parent: projectDir
            };

            projectsDir.children![projectDir.name] = projectDir;
        });

        // Add root files
        root.children!['about.md'] = {
            type: 'file',
            name: 'about.md',
            content: "CS Grad Student @ ASU | Software Engineer. I build resilient cloud infrastructure and full-stack apps. Focused on automating the boring stuff.",
            parent: root
        };

        root.children!['contact.json'] = {
            type: 'file',
            name: 'contact.json',
            content: linkify(JSON.stringify({
                email: "de.sharma993@gmail.com",
                github: "https://github.com/hadessharma",
                linkedin: "https://www.linkedin.com/in/deepsharma993/"
            }, null, 2)),
            parent: root
        };

        root.children!['skills.md'] = {
            type: 'file',
            name: 'skills.md',
            content: "Languages: Java, JavaScript, Python, C++, Kotlin\nCloud/DevOps: AWS, Azure, Docker, Kubernetes, Terraform\nFrontend: React, TypeScript, Tailwind CSS\nBackend: Node.js, Express, MongoDB, PostgreSQL",
            parent: root
        };

        setFileSystem(root);
    }, []);

    const bootSequence = [
        "Initializing system kernel...",
        "Mounting file systems...",
        "Loading user profile: deep_sharma",
        "Starting shell session...",
        "Welcome to DeepOS v2.0 (Developer Edition)",
        "Type 'help' or 'hint' to see available commands."
    ];

    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        let delay = 0;
        bootSequence.forEach((line, index) => {
            setTimeout(() => {
                setBootLines(prev => [...prev, line]);
                if (index === bootSequence.length - 1) {
                    setTimeout(() => setIsBooting(false), 500);
                }
            }, delay);
            delay += 400 + Math.random() * 400; // Random delay between lines
        });
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, bootLines]);



    const resolvePath = (pathStr: string): FileSystemNode | null => {
        if (!fileSystem) return null;
        if (pathStr === '/' || pathStr === '~') return fileSystem;



        // For now, let's just support relative navigation from current location or absolute from root if starts with ~
        // Actually, simpler: just traverse from current node

        // Improve Path Resolution
        // 1. Get current directory node
        let startNode = fileSystem;
        for (let i = 1; i < currentPath.length; i++) {
            startNode = startNode.children![currentPath[i]] as FileSystemNode;
        }

        if (pathStr.startsWith('~') || pathStr.startsWith('/')) {
            startNode = fileSystem; // Absolute path
            pathStr = pathStr.replace(/^[~/]/, '');
        }

        const parts = pathStr.split('/').filter(p => p && p !== '.');
        let node = startNode;

        for (const part of parts) {
            if (part === '..') {
                if (node.parent) node = node.parent;
            } else if (node.children && node.children[part]) {
                node = node.children[part];
            } else {
                return null; // Path not found
            }
        }
        return node;
    };

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();
        const [command, ...args] = trimmedCmd.split(/\s+/);
        let output: React.ReactNode = '';

        if (!command) { // Handle empty input
            setHistory(prev => [...prev, { cmd, output: '' }]);
            return;
        }

        switch (command.toLowerCase()) {
            case 'help':
            case 'hint':
                output = (
                    <div className="space-y-1 text-gray-300">
                        <p>Available commands:</p>
                        <div className="grid grid-cols-[100px_1fr] gap-2">
                            <span className="text-cyan-400">ls</span><span>List directory contents</span>
                            <span className="text-cyan-400">cd &lt;dir&gt;</span><span>Change directory</span>
                            <span className="text-cyan-400">cat &lt;file&gt;</span><span>Read file content</span>
                            <span className="text-cyan-400">pwd</span><span>Print working directory</span>
                            <span className="text-cyan-400">clear</span><span>Clear terminal</span>
                            <span className="text-cyan-400">whoami</span><span>Print current user</span>
                        </div>
                    </div>
                );
                break;
            case 'ls':
                // Get current directory node
                let currentNode = fileSystem;
                for (let i = 1; i < currentPath.length; i++) {
                    if (currentNode && currentNode.children) {
                        currentNode = currentNode.children[currentPath[i]];
                    }
                }

                const targetNode = args[0] ? resolvePath(args[0]) : currentNode;

                if (!targetNode) {
                    output = <span className="text-red-400">ls: cannot access '{args[0]}': No such file or directory</span>;
                } else if (targetNode.type === 'file') {
                    output = targetNode.name;
                } else {
                    const items = Object.values(targetNode.children || {}).map(child => {
                        const isDir = child.type === 'directory';
                        return (
                            <span key={child.name} className={`mr-4 ${isDir ? 'text-blue-400 font-bold' : 'text-gray-300'}`}>
                                {child.name}{isDir ? '/' : ''}
                            </span>
                        );
                    });
                    output = <div className="flex flex-wrap">{items}</div>;
                }
                break;
            case 'cd':
                if (!args[0]) {
                    setCurrentPath(['~']); // cd goes home
                } else {
                    const target = resolvePath(args[0]);
                    if (!target) {
                        output = <span className="text-red-400">cd: {args[0]}: No such file or directory</span>;
                    } else if (target.type !== 'directory') {
                        output = <span className="text-red-400">cd: {args[0]}: Not a directory</span>;
                    } else {
                        // Build new path stack
                        // This is a bit tricky with ".." and absolute paths in a simple stack
                        // Easier: Rebuild stack from target node up to root
                        const newPath: string[] = [];
                        let temp: FileSystemNode | null | undefined = target;
                        while (temp) {
                            newPath.unshift(temp.name);
                            temp = temp.parent;
                        }
                        setCurrentPath(newPath);
                    }
                }
                break;
            case 'cat':
                if (!args[0]) {
                    output = <span className="text-red-400">cat: missing operand</span>;
                } else {
                    const targetFile = resolvePath(args[0]);
                    if (!targetFile) {
                        output = <span className="text-red-400">cat: {args[0]}: No such file or directory</span>;
                    } else if (targetFile.type === 'directory') {
                        output = <span className="text-red-400">cat: {args[0]}: Is a directory</span>;
                    } else {
                        output = <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm">{targetFile.content}</pre>;
                    }
                }
                break;
            case 'pwd':
                output = currentPath.join('/').replace('~', '/home/visitor');
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'whoami':
                output = "visitor";
                break;
            case 'sudo':
                output = <span className="text-red-500 font-bold">Permission denied: You are not root!</span>;
                break;
            default:
                output = <span className="text-red-400">Command not found: {command}</span>;
        }
        setHistory(prev => [...prev, { cmd, output }]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-gray-900/90 rounded-lg border border-gray-700 shadow-2xl overflow-hidden font-mono text-sm md:text-base my-4 md:my-8 backdrop-blur-sm flex flex-col md:flex-row h-[550px] md:h-[600px]">

            {/* Sidebar / Profile Section */}
            <div className="w-full md:w-1/3 bg-gray-800/50 border-b md:border-b-0 md:border-r border-gray-700 p-6 flex flex-col items-center justify-center text-center space-y-4 shrink-0">
                <div className="relative group">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-24 h-24 md:w-40 md:h-40 rounded-sm border-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500"
                        style={{ imageRendering: 'pixelated' }}
                    />
                    <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-gray-100">Deep Sharma</h2>
                    <p className="text-green-400 text-sm">@deep_sharma</p>
                </div>

                <div className="text-gray-400 text-sm space-y-2">
                    <p>Software Engineer</p>
                    <p>DevOps Enthusiast</p>
                    <p>ASU Graduate</p>
                </div>

                <div className="w-full h-px bg-gray-700/50 my-4"></div>

                <div className="w-full space-y-2">
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>System Status</span>
                        <span className="text-green-400">Online</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Architecture</span>
                        <span>x86_64</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Kernel</span>
                        <span>5.15.0</span>
                    </div>
                </div>
            </div>


            {/* Main Terminal Section */}
            <div className="flex-1 flex flex-col h-full bg-gray-950/50">
                {/* Terminal Title Bar */}
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700 shrink-0">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
                    </div>
                    <div className="flex-1 text-center text-gray-400 text-xs md:text-sm select-none">
                        visitor@deep-portfolio: {currentPath.join('/').replace(/^~/, '~') || '/'}
                    </div>
                </div>

                {/* Terminal Body */}
                <div
                    ref={scrollRef}
                    className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 scrollbar-track-transparent"
                    onClick={() => {
                        const selection = window.getSelection();
                        if (!selection || selection.toString().length === 0) {
                            inputRef.current?.focus();
                        }
                    }}
                >
                    {/* Boot Sequence */}
                    <div className="text-gray-400 mb-4">
                        {bootLines.map((line, i) => (
                            <div key={i} className="mb-1">
                                <span className="text-green-500 mr-2">[OK]</span>
                                {line}
                            </div>
                        ))}
                    </div>

                    {/* Command History */}
                    {!isBooting && (
                        <>
                            {history.map((item, i) => (
                                <div key={i} className="mb-2">
                                    <div className="flex items-center text-gray-300">
                                        <span className="text-green-400 mr-2">➜</span>
                                        <span className="text-cyan-400 mr-2">{currentPath[currentPath.length - 1]}</span>
                                        <span className="text-gray-100">{item.cmd}</span>
                                    </div>
                                    {item.output && (
                                        <div className="ml-6 mt-1 text-gray-300 animate-fade-in break-words">
                                            {item.output}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Input Line */}
                            <div className="flex items-center">
                                <span className="text-green-400 mr-2">➜</span>
                                <span className="text-cyan-400 mr-2">{currentPath[currentPath.length - 1]}</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="bg-transparent border-none outline-none text-gray-100 flex-1 font-mono min-w-0"
                                    autoFocus
                                    spellCheck={false}
                                    autoComplete="off"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Terminal;
