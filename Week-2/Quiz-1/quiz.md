## Quiz 1 – Questions and My Answers

---

### **Q1. What is the correct order of Git actions after editing files?**

After editing files, the usual workflow is:

1. `git add .` to stage changes
2. `git commit -m "message"` to save a snapshot
3. `git push origin main` to send it to GitHub

---

### **Q2. What does `cd ..` do?**

It moves you up one directory to the parent folder.

---

### **Q3. What is a Git commit?**

A commit is a saved snapshot of the project at a specific point in time, with a message describing what changed.

---

### **Q4. What does HTML stand for?**

HyperText Markup Language.

---

### **Q5. What does the domain part of a URL represent?**

The domain identifies the server where a website is hosted and points users to where the files are stored.

---

### **Q6. What is a Git repository?**

A Git repository is a folder that stores a project’s files along with their version history, managed using Git. It can exist locally or be hosted online like on GitHub.

---

### **Q7. What is a merge conflict?**

A merge conflict happens when Git cannot automatically combine changes because the same part of a file was edited in different ways.

---

### **Q8. How do you resolve a merge conflict?**

You open the conflicted file, manually choose or combine the changes, remove the conflict markers, then run `git add` and `git commit`.

---

### **Q9. What is Universal Design?**

Universal Design means designing websites so they can be used by as many people as possible, including people with disabilities, without needing special adaptations.

---

### **Q10. What is the correct Git sequence to merge a branch into `main`?**

You first switch to main, then merge the branch:

```bash
git checkout main
git merge branch-name
```

You only commit if conflicts occur.

---

### **Q11. What is the difference between an absolute path and a relative path?**

An absolute path gives the full location starting from the root.
A relative path gives the location based on your current directory.

---

### **Q12. What is the main benefit of semantic HTML?**

Semantic HTML describes the meaning and structure of content so browsers, screen readers, and search engines understand it better, which improves accessibility.

---

### **Q13. What is the primary purpose of HTML?**

HTML is used to structure and describe the content of a web page.

---

### **Q14. What is the purpose of a `.gitignore` file?**

A `.gitignore` file tells Git which files should not be tracked or pushed, such as environment files or API keys.

---

### **Q15. What is the purpose of `<!DOCTYPE html>`?**

It tells the browser to use standards compliant HTML rendering instead of guessing.

---

### **Q16. What is the purpose of the `<label>` element in a form?**

A `<label>` associates text with an input field, improving usability and accessibility.

---

### **Q17. What is the purpose of the `aria-label` attribute?**

`aria-label` provides an accessible name for elements so screen readers can describe them properly.

---

### **Q18. What is the relationship between headings and sectioning elements?**

Sectioning elements group related content, and headings describe what each section is about. Together, they define the structure and outline of a page.

---

### **Q19. What is the role of the `<head>` section in HTML?**

The `<head>` contains metadata such as the page title, character set, and links to stylesheets, which browsers and search engines use.

---

### **Q20. What should you do if someone else pushed to the remote repository before you?**

You should pull the remote changes first, resolve any conflicts if needed, then push your changes.

---

### **Q21. Which command prints the full path of the current directory?**

`pwd`

---

### **Q22. Which HTML element is used to create a hyperlink?**

The `<a>` element.

---

### **Q23. What is a Git branch?**

A Git branch is an independent line of development that lets you work on changes without affecting the main codebase.

---

### **Q24. Which of the following is an absolute path?**

An example of an absolute path is:

```
/Users/joe/Desktop/info340/index.html
```

---

### **Q25. Which statement is NOT true about HTML? (I guessed what the choices is going to be, and I thought this is a good example on what's going to be in the quiz)**

HTML does not control page styling. Styling is handled by CSS.

---

### **Q26. What is the difference between HTML, CSS, and JavaScript?**

HTML handles structure and content, CSS handles styling and layout, and JavaScript handles behavior and interactivity.

---

### **Q27. What is the purpose of the `alt` attribute on an image?**

The `alt` attribute provides text for screen readers and displays a description if the image cannot load. Its main purpose is accessibility.

---

### **Q28. Why is accessibility important in web development?**

Accessibility ensures that websites can be used by people with disabilities and by users with different needs or assistive technologies.

---

### **Q29. What does `git status` tell you?**

It shows the current state of the repository, including staged files, unstaged changes, and untracked files.

---

### **Q30. Why is committing often considered a good practice?**

Committing often creates checkpoints, making it easier to track changes, collaborate, and recover from mistakes.

---
