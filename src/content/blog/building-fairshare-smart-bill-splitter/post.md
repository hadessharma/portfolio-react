# Behind the Code: Building FairShare, the Smart Bill Splitter

Have you ever gone out to dinner with a large group, ordered a simple side salad, and ended up paying a massive chunk of the bill because the group decided to "just split it evenly"? 

Enter **FairShare** - a modern, high-performance web application designed to solve the age-old problem of "who owes what." Unlike traditional splitters that rely on simple checkboxes or equal divisions, FairShare uses a **weighted, item-by-item system**. This ensures everyone pays exactly for what they consumed - calculated down to the pro-rated tax and fees.

In this post, we'll take a look under the hood to explore the technology stack that powers FairShare and the engineering decisions we made to maximize efficiency and fairness.

---

## The Tech Stack: Modern, Fast, and Reliable

Building a seamless application that handles complex math, real-time updates, and image processing requires a robust and modern technology stack.

### Frontend: React, Vite, and Tailwind CSS
To deliver a snappy and responsive user interface, we chose **React** powered by **Vite**. Vite provides lightning-fast hot module replacement (HMR) during development and highly optimized builds for production.
- **TypeScript** ensures type safety across complex state objects (like multi-person bill splits).
- **Tailwind CSS** handles the styling, allowing us to build a modern, mobile-first design with interactive elements like a sticky-header table for long receipts.
- **React Context API** is used for lightweight, predictable state management.

### Backend: FastAPI & Python 3.11
For the backend engine, we utilized **FastAPI**. Known for its exceptional performance - on par with NodeJS and Go - FastAPI allows us to build asynchronous, highly reliable APIs. Python serves as the perfect language here, given its rich ecosystem for data calculation and integration with AI/ML tools.

### Database: PostgreSQL & SQLAlchemy
Relational data is crucial for an application dealing with users, bills, line items, and complex debt relationships. 
- We use **PostgreSQL** as our primary database (hosted via Supabase).
- **SQLAlchemy** serves as the ORM, allowing us to interact with the database using Pythonic models.
- **Alembic** manages our database migrations, ensuring safe and version-controlled schema updates.

### Cloud & AI Integration: AWS Textract & Firebase
- **AWS Textract (via Boto3)**: Nobody wants to manually type out a 30-item receipt. We integrated AWS Textract's powerful OCR (Optical Character Recognition) to automatically scan receipt photos, extracting item names, quantities, and prices in seconds.
- **Firebase**: For secure and seamless authentication, we use Firebase Google Sign-In. The backend validates Firebase JWTs on every route to ensure robust, server-side security.

---

## Engineering for Efficiency

Building a basic expense tracker is straightforward. Building one that is fast, scalable, and mathematically perfect is much harder. Here are the key technical decisions we made to maximize FairShare’s efficiency:

### 1. Database Caching for Debts (Solving the O(N) Problem)
In a naïve implementation, calculating the total amount Bob owes Alice requires querying every single bill, iterating through every line item, checking Bob's share vs the total shares, and computing the math. This results in an `O(bills × items × shares)` time complexity, which would severely degrade read performance as the group's history grows.

**The Solution:** We implemented debt caching in the database. Pairwise debts are cached in a dedicated `debts` table and are *only* recomputed when a payer or an item share changes. This transforms a heavy computational process into a lightning-fast `O(1)` read, ensuring the group dashboard loads instantly.

### 2. Guarding Against Float Drift with Integer Shares
When splitting items, using percentages or floating-point numbers can lead to rounding errors and "float drift" (e.g., totaling $99.99 instead of $100.00). 

We engineered our allocation system to use **integer share counts** (e.g., a 2:1:1 ratio). This approach is not only mathematically stable - preventing lost pennies in division - but it's also much more intuitive for the user. If you ate two slices of pizza and your friend ate one, assigning a `2` and a `1` is simple and accurate.

### 3. Precision Pro-Rated Tax Logic
Most apps add tax at the end, distributed evenly across the group. This is fundamentally unfair: the person who ordered the $50 steak generates significantly more tax than the person who ordered the $10 salad. 

FairShare's backend operates on a **pro-rated tax logic model**. Taxes and fees are mapped proportionally to the subtotal of each individual’s selected items. The heavy orderers pay their fair share of the tax, keeping the math perfectly balanced.

### 4. JWT Validation on Every Route
Security is paramount when dealing with financial tracking. Rather than relying on frontend CORS hints, we implemented robust backend middleware. Every restricted endpoint requires a Firebase JSON Web Token (JWT), which is verified by the Firebase Admin SDK to ensure real server-side security.

---

## Conclusion

FairShare isn't just a utility; it's a carefully engineered solution to a highly relatable problem. By pairing a modern React/Vite frontend with an asynchronous FastAPI backend and intelligent caching strategies, we've built a platform that is as fast and technically efficient as it is fair. 

Whether you're splitting a massive grocery run or organizing a weekend trip, FairShare's stack ensures that the only thing you have to worry about is enjoying your time - not doing the math.
