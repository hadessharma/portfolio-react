# How to Edit Blog Posts

## Folder Structure

```
src/content/blog/
├── amazon-sde-intern-interview/
│   ├── post.md          # Main content - EDIT THIS!
│   ├── metadata.json    # Post metadata - EDIT THIS!
│   ├── images/          # Place images here
│   └── README.md        # Instructions
├── lseg-python-intern-interview/
│   ├── post.md          # Main content - EDIT THIS!
│   ├── metadata.json    # Post metadata - EDIT THIS!
│   ├── images/          # Place images here
│   └── README.md        # Instructions
└── HOW_TO_EDIT.md       # This file
```

## ✨ NEW SIMPLIFIED WORKFLOW!

**No more editing `blogData.tsx`!** The system now automatically loads your blog posts from the content folder.

### How to Edit Blog Content (EASY!)

1. **Edit Content**: Open `post.md` in any blog post folder
2. **Write Your Content**: Use markdown syntax to write your blog post
3. **Update Metadata**: Edit `metadata.json` to change title, date, tags, etc.
4. **Save**: Your changes are automatically reflected on the website!

### How to Add a New Blog Post

1. **Create Folder**: Create a new folder in `src/content/blog/` with a URL-friendly name (e.g., `my-new-blog-post`)
2. **Add Files**:
   - `post.md` - Your blog content
   - `metadata.json` - Post information
   - `images/` - Folder for images (optional)
3. **Done!** The blog system automatically detects and loads your new post!

## Adding Images

1. **Place Images**: Put your images in the specific post's `images/` folder

   ```
   src/content/blog/amazon-sde-intern-interview/images/your-image.jpg
   ```

2. **Reference in Markdown**: Use relative paths in your `post.md`:
   ```markdown
   ![Image description](./images/your-image.jpg)
   ```

## Metadata Format (metadata.json)

```json
{
  "id": "1",
  "title": "Your Blog Post Title",
  "excerpt": "A short description of your post",
  "date": "2024-01-20",
  "tags": ["Interview Experience", "Tech"],
  "readTime": "5 min read",
  "author": "Deep Sharma",
  "slug": "your-blog-post-slug"
}
```

**Important**: The `slug` should match your folder name!

## Content Format (post.md)

Write your content in standard markdown:

````markdown
# Your Blog Post Title

Your introduction paragraph...

## Section 1

Content for section 1...

### Subsection

More content...

## Section 2

- Bullet point 1
- Bullet point 2

**Bold text** and _italic text_

`code blocks`
````

## Quick Editing Guide

**Current Blog Posts:**

1. **Amazon SDE Intern Interview** - Edit files in `src/content/blog/amazon-sde-intern-interview/`
2. **LSEG Python Intern Interview** - Edit files in `src/content/blog/lseg-python-intern-interview/`

**To Add New Posts:** Just create a new folder with `post.md` and `metadata.json`!

## Example: Adding a New Blog Post

1. Create folder: `src/content/blog/my-new-experience/`
2. Create `metadata.json`:
   ```json
   {
     "id": "3",
     "title": "My New Experience",
     "excerpt": "What I learned from...",
     "date": "2024-12-01",
     "tags": ["Experience"],
     "readTime": "5 min read",
     "author": "Deep Sharma",
     "slug": "my-new-experience"
   }
   ```
3. Create `post.md`:

   ```markdown
   # My New Experience

   This is my blog post content...
   ```

4. The blog automatically appears on your website!

## Benefits of the New System

✅ **No more manual editing of `blogData.tsx`**  
✅ **Easy to add new posts - just create folders**  
✅ **Organized content structure**  
✅ **Automatic detection of new posts**  
✅ **Clean separation of content and code**  
✅ **Images properly organized per post**
