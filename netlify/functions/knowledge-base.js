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

Anvi Sharma is a Data Scientist and aspiring AI/ML engineer. She is excited about accelerating work with AI and fostering a growth
space for those around her.

- Location: Tampa, Florida (Open to relocation)
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

As of right now she holds just a bachelor's degree but would like to pursue a master's/PhD.

# EXPERIENCE

## Jabil — Programmer Analyst Intern
St. Petersburg, FL | June 2026 – Present
- Co-developed an AI document translation app for global use, cutting pre-existing
  third-party contract costs by $100K+.
- Collaborated with the GenAI Lead to optimize AI agents with MCP (Model Context
  Protocol) server involvement for real-time context and automation.
- Created application factsheets as a source of truth for basics and navigation
  through the app for application managers.
- Designed a QuickSight dashboard that improved loading times by 30% for the IT
  Supply Chain team.
- Explored data governance as a data custodian using Informatica

## Raymond James Investment Management — Data Distribution and Technology Summer Associate
St. Petersburg, FL | June 2025 – August 2025
- Increased client retention by 15% through recommendations of marketing events using k-Nearest Neighbors. 
- Boosted the efficiency of advisor-client meetings by 20% through creation of a future 
  purchase recommender for clients based on historical data.
- Supported CRM data migration from Microsoft Dynamics to Salesforce for client
  contact information and advisor outreach tracking.

# PROJECTS

## Diabetes Risk Calculator
A full-stack calculator, from model training to visualization in Streamlit.
- Trained and tested CDC public data on diabetes to represent diabetes risk.
- Deployed a user interface in Streamlit to promote accessibility of the
  calculator and hosted it online through GitHub.
- Live app: https://diabetes-risk-calculate.streamlit.app/
- Code: https://github.com/anvisharmaa/diabetes-risk-analyzer
- Tech: Python, scikit-learn, Streamlit

## Diabetes Risk Notebook
A prelude to the live Diabetes Risk Calculator app that explains her
decisions as a data scientist.
- Notebook: https://colab.research.google.com/drive/1csmFMKgxqm8WPtCxIcWfLEUuZZL18Toh?usp=sharing

## Project Propensity to Buy / Product Purchase Recommendation Engine
Supporting financial advisors with automated recommendations per client at Raymond
James Investment Management (RJIM).
- Developed and monitored a 3-product purchase recommendation engine for clients
  through real-life application of conditional probability arithmetic.
- Transformed and evaluated raw data into an HTML extension with filters, tooltips,
  and dropdown features for advisors.

## Doodle Jump
An homage to her first app: a recreation of the Doodle Jump game.
- Recreated the game with attention to detail on perspective and camera shifts,
  obstacles and increasing difficulty, and collision rendering.

# SKILLS

Data Science: statistical modeling, exploratory analysis, and visualization with
tools including Python, SQL, and Power BI.
Machine Learning: model selection and cross-validation with scikit-learn and
TensorFlow, from experimentation to deployment.
Software Engineering: writing clear, efficient code across the stack.
Data Engineering: rebuilding pipelines and queries to transform raw data into
performance-focused insights.

Programming Languages: Python, SQL (MySQL, T-SQL, PostgreSQL, NoSQL), R, C++, C#, CSS,
JavaScript, MATLAB.
Python Libraries: Pandas, scikit-learn, NumPy, TensorFlow, Keras, PyTorch, Seaborn,
Matplotlib, Streamlit.
Software & Tools: PyCharm, Kiro, Google Colab, Jupyter, Git, GitHub, Node.js, AWS,
Snowflake, Apache Airflow, Excel, Tableau/Power BI, Azure DevOps, Agile, Informatica, Microsoft
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
- LEGO: currently building the Koenigsegg Sadair's Spear Megacar (yes it was $450)
- Pickleball — always looking for a challenge
- Sudoku — wordle or strands could never compare
- Cooking — trying out new recipes as an extremely picky eater is a lot harder than you think
`;

module.exports = { KNOWLEDGE_BASE };
