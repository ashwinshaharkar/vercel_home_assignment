"use client"; // This is a client component 👈🏽
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import data from '../data/mock-data.json';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="container">
          <div className="row">
            <div className="main_heading"><h1>Vercel - Home Assignment</h1></div>
          </div>
          <div className="row">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  #1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.
                </Accordion.Header>
                <Accordion.Body>
                  <span className="sub_hrd">Top 5 Most Favorite Support Tasks:</span>
                  <ul>
                    <li><u>Create video tutorials to help teach users a specific feature or use case:</u>I enjoy creating educational content that can help users understand and utilize features effectively. Video tutorials provide a more engaging and comprehensive learning experience.</li>
                    <li><u>Help train and onboard new support teammates:</u>I find satisfaction in sharing knowledge and helping new teammates develop their skills. Contributing to the growth and success of the support team fosters a sense of camaraderie and accomplishment.</li>
                    <li><u>Respond to queries on Twitter, Reddit, Hacker News, and other 3rd party sites:</u>Engaging with users on external platforms allows for broader outreach and community interaction. It's an opportunity to showcase expertise, address concerns, and build relationships beyond traditional support channels.</li>
                    <li><u>Work with the product team to develop a new feature based on feedback from customers:</u>Collaborating with the product team to translate customer feedback into actionable feature enhancements is exciting and impactful. It demonstrates a proactive approach to improving the product based on user needs.</li>
                    <li><u>Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel:</u>Building strong relationships with key customers and ensuring their success can be rewarding, as it often leads to valuable feedback, referrals, and long-term partnerships.</li>
                  </ul>
                  <span className="sub_hrd">Top 5 Least Favorite Support Tasks:</span>
                  <ul>
                    <li><u>Respond to 50+ support requests via email every day:</u>While providing support is essential, responding to a high volume of emails daily can be overwhelming and repetitive, leaving less time for other tasks that may be more engaging or impactful.</li>
                    <li><u>Help resolve billing issues for customers:</u>Dealing with billing issues can be tedious and complex, involving various policies, procedures, and systems. It requires meticulous attention to detail and patience, but may not always offer the same sense of fulfillment as other tasks.</li>
                    <li><u>Dig through logs to troubleshoot a customer's broken project:</u>While troubleshooting technical issues is essential, sifting through logs can be time-consuming and mentally taxing, especially when the problem is challenging to identify or resolve.</li>
                    <li><u>Analyze hundreds of support tickets to spot trends the product team can use:</u>Analyzing support tickets to identify trends and patterns is valuable for product improvement, but it can be repetitive and monotonous, requiring careful attention to detail over an extended period.</li>
                    <li><u>Scheduling time-off coverage and collaborating as part of a growing cohesive support team:</u>While teamwork and collaboration are essential, administrative tasks such as scheduling time-off coverage may feel less stimulating compared to more customer-facing or strategic activities.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>#2.	What do you want to learn or do more of at work?</Accordion.Header>
                <Accordion.Body>
                  As a Support Manager, I would likely be responsible for leading and managing a team of customer support representatives. My primary goal would be to ensure that customers receive timely and effective assistance with their inquiries, issues, and feedback regarding Vercel's products and services, which primarily revolve around web development and deployment tools, including Next.js.
                  <br /><br />Following are some key areas I might focus on learning:<br />
                  <ul>
                    <li><u>Team Leadership and Management:</u>Developing my skills in leading and managing a team, including hiring and training new team members, setting performance goals, providing coaching and feedback, and fostering a positive and collaborative work environment.</li>
                    <li><u>Product Knowledge:</u>Deepening my understanding of Vercel's products and services, particularly Next.js and related technologies, so I can effectively support customers and guide your team in resolving technical issues and providing valuable insights and solutions.</li>
                    <li><u>Customer Relationship Management:</u>Strengthening my ability to build and maintain strong relationships with customers, understanding their needs and challenges, and ensuring that their feedback is effectively communicated to the appropriate teams within Vercel for product improvement and innovation.</li>
                    <li><u>Process Improvement:</u>Identifying opportunities to streamline and improve customer support processes and workflows, implementing tools and systems to enhance efficiency and effectiveness, and continuously monitoring and optimizing key performance metrics, such as response times and customer satisfaction scores.</li>
                    <li><u>Technical Skills:</u>Developing my technical skills, particularly in web development and deployment technologies, to better assist customers with technical inquiries and troubleshoot complex.</li>
                    <li><u>Communication Skills:</u>Enhancing my communication skills, both written and verbal, to effectively interact with customers, team members, and other stakeholders, including providing clear and concise instructions, documentation, and updates.</li>
                  </ul>
                  By focusing on these areas, I can effectively grow and excel in a Customer Support Manager role at Vercel, contributing to the success of the company and the satisfaction of its customers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>#3.	Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?</Accordion.Header>
                <Accordion.Body>
                  In a previous support role, I encountered a challenge with a web application where users were reporting slow loading times and occasional timeouts, especially during peak usage hours. This issue was negatively impacting user experience and leading to increased support tickets.
                  <br /><br />Here's how I tackled the challenge and ensured the solution's success:<br />
                  <ul>
                    <li><u>Gathering User Reports:</u>Initially, I collected detailed reports from users experiencing the slow loading times. This involved gathering information on the specific pages or features affected, the frequency of occurrence, and any error messages encountered.</li>
                    <li><u>Performance Analysis:</u>I conducted a comprehensive performance analysis of the web application using various tools and techniques e.g. new relic, screaming frog. This included examining server-side performance metrics, frontend rendering times, network latency, and database query performance.</li>
                    <li><u>Identifying Bottlenecks:</u>Through performance profiling and monitoring, I identified several potential bottlenecks contributing to the slow loading times. These included inefficient database queries, large asset sizes, unoptimized code, and inadequate server resources to handle peak traffic.</li>
                    <li><u>Prioritizing Fixes:</u>Based on my analysis, I prioritized fixes that would have the most significant impact on improving performance. This involved addressing critical issues such as optimizing database queries, implementing caching mechanisms for frequently accessed data, and compressing and minifying assets to reduce page load times.</li>
                    <li><u>Collaboration with Development Team:</u>I collaborated closely with the development team to implement the identified fixes. This involved sharing my findings, discussing potential solutions, and coordinating efforts to deploy the necessary changes to the production environment.</li>
                    <li><u>Testing and Monitoring:</u>After implementing the fixes, I conducted thorough testing to ensure that the performance improvements were effective and did not introduce any regressions or new issues. Additionally, I set up continuous monitoring to track key performance metrics and promptly detect any anomalies or regressions.</li>
                    <li><u>User Feedback and Validation:</u>To determine the success of the solution, I actively sought feedback from users following the performance improvements. This involved monitoring support tickets, user inquiries, and satisfaction surveys to gauge user perception and satisfaction with the application's performance.</li>
                  </ul>
                  <br />The success of the solution was determined by several factors:
                  <ul>
                    <li><u>Improved Loading Times:</u>Users reported a noticeable improvement in page loading times and responsiveness, indicating that the implemented fixes had effectively addressed the performance issues.</li>
                    <li><u>Reduction in Support Tickets:</u>There was a significant decrease in the number of support tickets related to slow loading times or timeouts, reflecting an improvement in user experience and a reduction in user frustration.</li>
                    <li><u>Stable Performance Metrics:</u>Key performance metrics such as page load times, server response times, and error rates remained stable or showed improvement over time, validating the effectiveness of the solution.</li>
                  </ul>
                  By following a systematic approach to performance optimization, collaborating closely with the development team, and prioritizing user feedback, I was able to successfully address the technical issue and enhance the overall performance and user experience of the web application.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
