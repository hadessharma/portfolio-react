import React, { useState, useEffect, useRef } from 'react';
import profilePic from '../../assets/profile-pic.png';

interface CommandHistory {
    cmd: string;
    output: React.ReactNode;
}

const Terminal: React.FC = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandHistory[]>([]);
    const [isBooting, setIsBooting] = useState(true);
    const [bootLines, setBootLines] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const bootSequence = [
        "Initializing system kernel...",
        "Loading user profile: deep_sharma",
        "Mounting file systems...",
        "Loading profile image...",
        "Checking dependencies...",
        "System checks passed.",
        "Welcome to DeepOS v1.0.0",
        "Type 'help' for available commands."
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

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = '';

        switch (trimmedCmd) {
            case 'help':
                output = (
                    <div className="space-y-1 text-gray-300">
                        <p>Available commands:</p>
                        <div className="grid grid-cols-[100px_1fr] gap-2">
                            <span className="text-cyan-400">about</span>
                            <span>- Get to know me</span>
                            <span className="text-cyan-400">skills</span>
                            <span>- View technical expertise</span>
                            <span className="text-cyan-400">projects</span>
                            <span>- View featured work</span>
                            <span className="text-cyan-400">contact</span>
                            <span>- Social links & email</span>
                            <span className="text-cyan-400">clear</span>
                            <span>- Clear terminal</span>
                            <span className="text-cyan-400">resume</span>
                            <span>- Download PDF resume</span>
                        </div>
                    </div>
                );
                break;
            case 'about':
                output = "CS Grad Student @ ASU | Software Engineer. I build resilient cloud infrastructure and full-stack apps. Focused on automating the boring stuff.";
                break;
            case 'skills':
                output = (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <span className="text-yellow-400">Languages:</span> Java, JavaScript, Python, C++, Kotlin
                        </div>
                        <div>
                            <span className="text-blue-400">Cloud/DevOps:</span> AWS, Azure, Docker, Kubernetes, Terraform
                        </div>
                        <div>
                            <span className="text-green-400">Frontend:</span> React, TypeScript, Tailwind CSS
                        </div>
                        <div>
                            <span className="text-purple-400">Backend:</span> Node.js, Express, MongoDB, PostgreSQL
                        </div>
                    </div>
                );
                break;
            case 'projects':
                output = "Check out the projects section below! Or try 'cat terrazure' (coming soon)";
                setTimeout(() => {
                    const projectsSection = document.getElementById('projects');
                    projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }, 1000);
                break;
            case 'contact':
                output = (
                    <div className="space-y-1">
                        <p>Email: <a href="mailto:de.sharma993@gmail.com" className="text-cyan-400 hover:underline">de.sharma993@gmail.com</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/deepsharma993/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">linkedin.com/in/deepsharma993</a></p>
                        <p>GitHub: <a href="https://github.com/hadessharma" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">github.com/hadessharma</a></p>
                    </div>
                );
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'sudo':
                output = <span className="text-red-500 font-bold">Permission denied: You are not root! Nice try though 😉</span>;
                break;
            case 'whoami':
                output = "guest_user@portfolio-visitor";
                break;
            case 'ls':
                output = "projects/  skills/  about.md  contact.json  resume.pdf";
                break;
            case 'resume':
                output = "Downloading resume...";
                // Trigger download
                const link = document.createElement('a');
                link.href = '/src/assets/resume_DeepSharma.pdf'; // Verify this path
                link.download = 'Resume_DeepSharma.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;
            case '':
                output = '';
                break;
            default:
                output = <span className="text-red-400">Command not found: {trimmedCmd}. Type 'help' for assistance.</span>;
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
        <div className="w-full max-w-4xl mx-auto bg-gray-900/90 rounded-lg border border-gray-700 shadow-2xl overflow-hidden font-mono text-sm md:text-base my-8 backdrop-blur-sm flex flex-col md:flex-row h-[500px] md:h-[600px]">

            {/* Sidebar / Profile Section */}
            <div className="w-full md:w-1/3 bg-gray-800/50 border-b md:border-b-0 md:border-r border-gray-700 p-6 flex flex-col items-center justify-center text-center space-y-4">
                <div className="relative group">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-sm border-2 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500"
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
                        visitor@deep-portfolio: ~
                    </div>
                </div>

                {/* Terminal Body */}
                <div
                    ref={scrollRef}
                    className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 scrollbar-track-transparent"
                    onClick={() => inputRef.current?.focus()}
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
                                        <span className="text-cyan-400 mr-2">~</span>
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
                                <span className="text-cyan-400 mr-2">~</span>
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
