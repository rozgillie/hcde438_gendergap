import React from 'react';
import {PieChart, Pie} from 'recharts';
import './Company.css';


function Company() {
  let company = document.getElementById("company-search").value;
  let s = JSON.stringify(data)
  let d = JSON.parse(s);
  console.log(da["students"]);
  return(
      <div className="Info">
      <header className="header">
        <div className="logo"/>
        <span className="title">Gender Gap Analysis</span> 
      </header>
      <body>
        <section className="company-info">
          <h1>{company}</h1>
          <h3>{d[company]["date_latest_research"]}</h3>
          <h3>{d[company]["group"]}</h3>
          <h4>Company Description</h4>
        </section>
        <section className="data">
          <div className="pie-chart">
        <PieChart width={300} height={200}>
            <Pie data={d[company]} dataKey="pct_women_emplys" outerRadius={85} fill="green"/>
          </PieChart>
          <h2>% of Women in the Company</h2>
          </div>
          <div className="pie-chart">
        <PieChart width={300} height={200}>
            <Pie data={da} dataKey="students" outerRadius={85} fill="green" />
          </PieChart>
          <h2>% of Women Holding Executive Positions</h2>
          </div>
          <div className="pie-chart">
        <PieChart width={300} height={200}>
            <Pie data={da} dataKey="students" outerRadius={85} fill="green" />
          </PieChart>
          <h2>% of Women in Senior Management</h2>
          </div>
          <div className="pie-chart">
        <PieChart width={300} height={200}>
            <Pie data={da} dataKey="students" outerRadius={85} fill="green" />
          </PieChart>
          <h2>% of Women Board Members</h2>
          </div>
          </section>
      </body>
      <footer>
      </footer>
        <section>
  
        </section>
      <div className="footer">
        <h4>HCDE 438: Web Technologies</h4>
      </div>
    </div>
    )
}

export default Company;

const da = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-o-mania', students: 1000}
];

const data =

  {"REA Group Ltd":
  {
    "ric": "REA.AX",
    "isin": "AU000000REA9",
    "cusip": "Q8051B108",
    "company_name": "REA Group Ltd",
    "country_of_exchange": "Australia",
    "sector": "Communication Services",
    "group": "Media & Entertainment",
    "pct_women_board": 37.5,
    "pct_female_exec": 55.555555555556,
    "pct_women_senior_mgt": 49,
    "pct_women_emplys": 50.1,
    "prmtn_career_devl": 0.978043912176,
    "living_wage_policy": "N",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "N",
    "date_latest_research": "2021-01-26"
  },
  "L'Oreal SA": {
    "ric": "OREP.PA",
    "isin": "FR0000120321",
    "cusip": "F58149133",
    "company_name": "L'Oreal SA",
    "country_of_exchange": "France",
    "sector": "Consumer Staples",
    "group": "Household & Personal Products",
    "pct_women_board": 57.142857142857,
    "pct_female_exec": 26.315789473684,
    "pct_women_senior_mgt": 54,
    "pct_women_emplys": 70,
    "prmtn_career_devl": 0.771428571429,
    "living_wage_policy": "Y",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "Y",
    "date_latest_research": "2021-01-16"
  },
  "Moneysupermarket.Com Group PLC":{
    "ric": "MONY.L",
    "isin": "GB00B1ZBKY84",
    "cusip": "G6258H101",
    "company_name": "Moneysupermarket.Com Group PLC",
    "country_of_exchange": "United Kingdom",
    "sector": "Consumer Discretionary",
    "group": "Retailing",
    "pct_women_board": 62.5,
    "pct_female_exec": 25,
    "pct_women_senior_mgt": 44,
    "pct_women_emplys": 42,
    "prmtn_career_devl": 1.047619047619,
    "living_wage_policy": "Y",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "ND",
    "date_latest_research": "2021-01-14"
  },
  "General Motors Co":{
    "ric": "GM.N",
    "isin": "US37045V1008",
    "cusip": "37045V100",
    "company_name": "General Motors Co",
    "country_of_exchange": "United States of America",
    "sector": "Consumer Discretionary",
    "group": "Automobiles & Components",
    "pct_women_board": 54.545454545455,
    "pct_female_exec": 20,
    "pct_women_senior_mgt": 32.2,
    "pct_women_emplys": 21.8,
    "prmtn_career_devl": 1.477064220183,
    "living_wage_policy": "Y",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "Y",
    "date_latest_research": "2020-12-28"
  },
  "Dnb ASA":{
    "ric": "DNB.OL",
    "isin": "NO0010031479",
    "cusip": "R1640U124",
    "company_name": "Dnb ASA",
    "country_of_exchange": "Norway",
    "sector": "Financials",
    "group": "Banks",
    "pct_women_board": 60,
    "pct_female_exec": 50,
    "pct_women_senior_mgt": 40,
    "pct_women_emplys": 47.4,
    "prmtn_career_devl": 0.84388185654,
    "living_wage_policy": "N",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "Y",
    "date_latest_research": "2020-12-28"
  }};
 