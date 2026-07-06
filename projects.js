/**
 * projects.js
 * ------------------------------------------------------------------
 * This is the ONLY file you need to touch to add, edit, or remove a
 * project from the site. index.html reads this array and renders one
 * card per entry automatically — no HTML editing required.
 *
 * To add a new project: copy an object below, fill in your details,
 * save, and push to GitHub. Leave "dashboard" as an empty string if
 * the project has no live app.
 * ------------------------------------------------------------------
 */

const projects = [
  {
    title: "Late Delivery Risk Prediction in Global Supply Chain Operations",
    tag: "Machine Learning · Operational Analytics",
    description:
      "Analyzed 180,519 global shipment records to surface delivery-delay patterns across regions, shipping modes, and customer segments. Engineered logistics risk indicators from a 40-attribute dataset, then trained Logistic Regression, Random Forest, and XGBoost models to score order-level delivery risk — tuning the decision threshold to 0.35 to improve recall on high-risk shipments. Shipped as a four-module operational dashboard for delay monitoring, order-level risk scoring, regional trend analysis, and action tracking.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Plotly", "Streamlit"],
    github:
      "https://github.com/amrit1426/Machine-Learning-Based-Late-Delivery-Risk-Prediction-in-Global-Supply-Chain-Operations",
    dashboard: "https://apl-logistics-dashboard.streamlit.app/",
    image: "assets/images/project-late-delivery.png",
    featured: true
  },
  {
    title: "Product Line Profitability & Margin Performance Analysis",
    tag: "Unified Mentor Internship · Business Intelligence",
    description:
      "Ran exploratory data analysis across 10,000+ transactional records to evaluate product-level profitability, gross margins, and revenue contribution across three divisions — surfacing performance gaps hidden beneath headline revenue. Built a KPI framework tracking gross margin %, profit-to-revenue gap, cost ratio, and margin volatility, then applied Pareto analysis to find profit concentration and portfolio-rationalization opportunities. Delivered as a five-module dashboard with leaderboards, margin contribution views, Pareto charts, and cost-vs-revenue visualizations.",
    tech: ["Python", "Pandas", "NumPy", "Plotly", "Streamlit"],
    github:
      "https://github.com/amrit1426/Product-Line-Profitability-Margin-Performance-Analysis-for-Nassau-Candy-Distributor",
    dashboard: "https://candy-distributor-analysis.streamlit.app/",
    image: "assets/images/project-profitability.png",
    featured: true
  },
  {
    title: "Global Job Market & Skills Demand Analysis",
    tag: "Independent Project · SQL & Power BI",
    description:
      "Designed and built a PostgreSQL relational database for 787K+ global job postings, modeling fact, dimension, and bridge tables with primary/foreign key relationships and indexes for scalable querying. Used SQL — joins, CTEs, aggregations, grouping, and HAVING clauses — to evaluate salary trends, hiring demand, and top-paying roles. Delivered as a four-page Power BI dashboard built on a star schema with Power Query transformations and reusable DAX measures, tracing hiring trends, salary distributions, and skill demand end to end.",
    tech: ["PostgreSQL", "SQL", "Power BI", "DAX", "Power Query"],
    github:
      "https://github.com/amrit1426/20260701_Job_Market_Skills_Demand_Analysis_SQL_PowerBI",
    dashboard: "",
    image: "assets/images/project-job-market.png",
    featured: true
  },
  {
    title: "Electricity Load Intelligence: Time-Series & Demand Trend Analysis",
    tag: "Independent Project · Time-Series Analysis",
    description:
      "Consolidated 1,100+ fragmented daily electricity load files, historical archives, and hourly weather datasets into one unified time-series dataset spanning multiple years. Resolved timestamp inconsistencies and missing values, then integrated load and weather data to study peak demand periods, weekday-vs-weekend consumption, seasonal load variation, and temperature-load relationships across the Delhi power grid — identifying intraday and seasonal demand trends relevant to energy planning.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github:
      "https://github.com/amrit1426/ETL-and-Timeseries-Analysis-on-Electricity-Daily-Load-Dataset",
    dashboard: "",
    image: "assets/images/project-electricity.png",
    featured: true
  }
];
