/* ============================================
   Portfolio Chatbot — knowledge-base.js
   --------------------------------------------
   The single source of truth about Anvi that the
   assistant is allowed to talk about. This whole
   string is injected into the system prompt on
   every request, so the model answers ONLY from
   what's here (a lightweight RAG approach that is
   ideal for a portfolio-sized knowledge base).

   To update the bot's knowledge, just edit the text
   below — no retraining, no vector DB required.
   ============================================ */

const KNOWLEDGE_BASE = `
# ABOUT ANVI SHARMA

Anvi Sharma is a Data Scientist by focus and an engineer by training. She is a
multidisciplinary engineer who loves turning bright ideas into accessible
products, and she cares about the small details that make for an effortless user
experience. She is excited about accelerating work with AI and fostering a growth
space for the people around her.

- Location: St. Petersburg / Tampa, Florida area. Open to relocation.
- Email: anvi.sharma1@gmail.com
- Phone: 813-841-8240
- LinkedIn: https://www.linkedin.com/in/anvi-sharma33
- Portfolio: https://imanvisharma.netlify.app
- GitHub: https://github.com/anvisharmaa

# EDUCATION

University of Florida — Gainesville, FL
B.S. in Data Science (June 2022 – December 2025)
Relevant coursework:
- Linear Algebra for Data Science (Python)
- Information and Database Systems (SQL)
- Statistical Learning and Computing (R)
- Data Structures & Algorithms (C++)
- Business Analytics & AI (Python)
- AI Fundamentals (Python)

She holds a bachelor's degree and is eager to deepen her expertise further by
pursuing a master's.

# EXPERIENCE

## Jabil — Programmer Analyst Intern (Manufacturing)
St. Petersburg, FL | June 2026 – Present
- Co-developed an AI document translation app for global use, cutting pre-existing
  third-party contract costs by $100K+.
- Collaborated with the GenAI Lead to optimize AI agents with MCP (Model Context
  Protocol) server involvement for real-time context and automation.
- Created application factsheets as a source of truth for basics and navigation
  through the app for application managers.
- Designed a QuickSight dashboard that improved loading times by 30% for the IT
  Supply Chain team.

## Raymond James Investment Management — Data Distribution and Technology Summer Associate (Fintech)
St. Petersburg, FL | June 2025 – August 2025
- Increased client retention by 15% through event attendance trend analysis and
  planning for the marketing team using K-nearest neighbors.
- Boosted the efficiency of advisor-client meetings by 20% through exploratory
  data analysis (EDA) of historical data and client purchase records.
- Supported CRM data migration from Microsoft Dynamics to Salesforce for client
  contact information and advisor outreach tracking.

## Eufinity — Data Science Intern (Healthcare Startup)
Remote, USA | May 2024 – August 2024
- Designed and deployed Power BI dashboards to track client satisfaction and
  reduced client survey bug feedback by 25%.

# PROJECTS

## Diabetes Risk Calculator (Python) — March 2026
A full-stack calculator, from model training to visualization in Streamlit.
- Trained and tested CDC public data on diabetes to represent diabetes risk with a
  23% error rate under a radial SVM.
- Deployed a user interface in Streamlit to promote accessibility of the
  calculator and hosted it online through GitHub.
- Live app: https://diabetes-risk-calculate.streamlit.app/
- Code: https://github.com/anvisharmaa/diabetes-risk-analyzer
- Tech: Python, scikit-learn, Streamlit

## Diabetes Risk Notebook (Google Colab, Python)
A prelude to the live Diabetes Risk Calculator app that explains all of Anvi's
decisions as a data scientist.
- Notebook: https://colab.research.google.com/drive/1csmFMKgxqm8WPtCxIcWfLEUuZZL18Toh?usp=sharing

## Project Propensity to Buy / Product Purchase Recommendation Engine (Python, JavaScript, R) — August 2025
Supporting financial advisors with automated recommendations per client at Raymond
James Investment Management (RJIM).
- Developed and monitored a 3-product purchase recommendation engine for clients,
  targeting Raymond James' core value of "client first" by programming conditional
  probability arithmetic.
- Transformed and evaluated raw data into an HTML extension with filters, tooltips,
  and dropdown features for advisors.

## Doodle Jump (Python) — November 2023
An homage to her first app: a recreation of the Doodle Jump game.
- Recreated the game with attention to detail on perspective and camera shifts,
  obstacles and increasing difficulty, and collision rendering.

# SKILLS

Data Science: statistical modeling, exploratory analysis, and visualization with
tools including Python, SQL, and Power BI.
Machine Learning: model selection and cross-validation with scikit-learn and
TensorFlow, from experimentation to deployment.
Software Engineering: writing clear, efficient code across the stack for an
enjoyable experience for developers and users alike.
Data Engineering: rebuilding pipelines and queries to transform raw data into
performance-focused insights.

Programming Languages: Python, SQL (MySQL, T-SQL, PostgreSQL, NoSQL), R, C++, C#,
JavaScript, MATLAB.
Python Libraries: Pandas, scikit-learn, NumPy, TensorFlow, Keras, PyTorch, Seaborn,
Matplotlib, Streamlit.
Software & Tools: PyCharm, Kiro, Google Colab, Jupyter, Git, GitHub, Node.js, AWS,
Snowflake, Apache Airflow, Excel, Tableau/Power BI, Azure DevOps, Agile, Microsoft
Office.

# CERTIFICATIONS & AWARDS

Certifications (via AWS Skill Builder, LinkedIn Learning, Verizon edX, Sololearn):
- AWS Cloud Practitioner
- Apache Airflow
- Snowflake for Data Developers
- Power BI
- SQL Intermediate

Awards:
- Jacob Adam Washinger Member of the Year — an award dedicated to those with
  humility, modesty, and striving in character (Islam on Campus, Gainesville).

# COMMUNITY & VOLUNTEERING

Community volunteer with: Bread of the Mighty Food Bank, Back on Track America,
Feeding Tampa Bay, Project Downtown Gainesville, Metropolitan Ministries, and
Jabil Cares.

# INTERESTS & HOBBIES ("Anvi After Hours")

When she's not building models, she's usually building something else.
- LEGO (current obsession: building the latest LEGO Technic release). "Brick by
  brick, just like good software."
- Pickleball — the best excuse to get off the keyboard.
- Sudoku — pattern-hunting, but make it a coffee-break puzzle.
- Spider-Man superfan — "with great data comes great responsibility."
- Cooking — following a recipe, then ignoring it entirely.
- Also enjoys video games, anime, hiking, and reading.
`;

module.exports = { KNOWLEDGE_BASE };
