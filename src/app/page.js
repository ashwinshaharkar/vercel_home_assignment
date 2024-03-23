"use client"; // This is a client component 👈🏽
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

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
              <Accordion.Item eventKey="3">
                <Accordion.Header>#4.	When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Use <strong>Edge Functions</strong> for lightweight, globally-applied optimizations or customizations executed at the network edge.</li>
                    <li>Use <strong>Serverless Functions</strong> for dynamic, on-demand execution of application logic in response to specific HTTP requests or events.</li>
                    <li>Use <strong>Edge Middleware</strong> for applying common functionality or modifications to incoming requests or outgoing responses at the edge, affecting multiple parts of your application.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>#5.	Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?</Accordion.Header>
                <Accordion.Body>
                  When faced with a customer request for help with a build issue on a framework or technology that I'm not familiar with, I would approach the troubleshooting process systematically and methodically. Here's a general outline of how I would proceed, along with some questions I might ask the customer to better understand the situation:
                  <ul>
                    <li><u>Gather Information:</u>Ask the customer to provide details about the specific error or issue they are encountering during the build process. Request any relevant logs, error messages, or stack traces associated with the build failure. Determine which tools, frameworks, libraries, and versions are being used in the project.</li>
                    <li><u>Research and Familiarization:</u>Quickly research the framework or technology in question to gain a basic understanding of its architecture, build process, common issues, and troubleshooting techniques. Review documentation, forums, community resources, and any available tutorials or guides related to the technology.</li>
                    <li><u>Ask Clarifying Questions:</u>Request more context about the customer's project, including its structure, dependencies, configuration files, and any recent changes or updates. Inquire about the steps the customer has already taken to troubleshoot the issue and any potential workarounds they have tried. Ask if there are any specific build commands, scripts, or configurations that are relevant to the problem.</li>
                    <li><u>Identify Potential Causes:</u>Analyze the provided error messages or logs to identify any obvious issues, such as missing dependencies, syntax errors, or configuration problems. Consider common pitfalls or known issues associated with the framework or technology that might be causing the build failure. Check for compatibility issues with other tools or libraries being used in the project.</li>
                    <li><u>Propose Solutions and Next Steps:</u>Based on the gathered information and initial analysis, suggest potential solutions or troubleshooting steps to the customer. Offer guidance on how to verify and test proposed solutions, as well as how to collect additional diagnostic information if needed. Provide resources, links, or references to relevant documentation, tutorials, or community forums where the customer can find further assistance.</li>
                  </ul>
                  Throughout this process, it's essential to maintain clear and effective communication with the customer, ensuring that they understand the steps being taken and feel supported in resolving their issue. Additionally, remaining open-minded, adaptable, and willing to learn new technologies or frameworks is crucial when faced with unfamiliar problems.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>#6.	The customer from question 5 replies to your response with the below:
                  <br /><br />“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.” Please write a follow-up reply to the customer.
                </Accordion.Header>
                <Accordion.Body>
                  Dear [Customer's Name],
                  <br /><br />
                  I completely understand your frustration and the challenges you're facing. I sincerely apologize for the inconvenience this has caused you.
                  <br /><br />
                  While I empathize with your situation, our goal is to provide you with the best possible assistance to resolve the issue you're encountering. Your feedback is valuable to us, and we are committed to helping you get past this hurdle as quickly as possible.
                  <br /><br />
                  In order to address your concern effectively, it's important for us to gather some additional information and perform a thorough investigation. This will help us identify the root cause of the problem and implement a solution tailored to your specific situation.
                  <br /><br />
                  That being said, I assure you that we are dedicated to resolving this issue promptly. Our team will prioritize your case and work diligently to find a resolution. Please bear with us as we continue to assist you through this process.
                  If you have any further questions or concerns, please don't hesitate to reach out. We're here to help every step of the way.
                  <br /><br />
                  Thank you for your patience and understanding.
                  <br /><br />
                  Warm Regards,<br />
                  [My Name]<br />
                  [My Position/Role]<br />
                  [My Contact Information]
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>#7.	A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
                </Accordion.Header>
                <Accordion.Body>
                  Dear [Customer's Name],
                  <br /><br />
                  Thank you for reaching out to our Helpdesk.
                  <br /><br />
                  To set up a redirect from the "/blog" path to "https://example.com," you can use a technique called URL redirection. Here's how you can achieve this:
                  <br /><br />
                  If you have access to your website's server configuration (e.g., Apache or Nginx), you can add a redirect rule to the configuration file. For example, if you're using Apache, you can add the following lines to your .htaccess file:
                  <br /><br />
                  <code>
                    RewriteEngine On<br />
                    RewriteRule ^blog(.*)$ https://example.com [R=301,L]
                  </code>
                  <br /><br />
                  This rule will redirect any requests to the "/blog" path to "https://example.com" with a permanent (301) redirect status.
                  <br /><br />
                  If you're using a different web server or hosting environment, the process may vary slightly. Please let us know if you need further assistance or if you're unsure about how to implement this redirection, and we'll be happy to help.
                  I hope this information helps! If you have any additional questions or need further clarification, please don't hesitate to ask.
                  <br /><br />
                  Warm Regards,<br />
                  [My Name]<br />
                  [My Position/Role]<br />
                  [My Contact Information]
                  <br /><br />
                  <u>Decision Making Process:</u>
                  <ul>
                    <li>
                      I chose to provide a solution using URL redirection via server configuration, specifically mentioning Apache's .htaccess file as an example. This decision assumed that the customer has access to server configuration files and is using a web server like Apache.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>#8.	A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
                </Accordion.Header>
                <Accordion.Body>
                  Dear [Customer's Name],
                  <br /><br />
                  Thank you for reaching out to us.
                  <br /><br />
                  To prevent search engines from indexing your website, you can implement a directive called "robots.txt." This file tells web crawlers which pages or sections of your site should not be indexed.
                  <br /><br />
                  Here's how you can create a "robots.txt" file to disallow indexing for your entire site:
                  a.	Create a new text file named "robots.txt" in the root directory of your website.
                  b.	Add the following lines to the "robots.txt" file:
                  <br /><br />
                  <code>
                    User-agent: * <br />
                    Disallow: /
                  </code>
                  <br /><br />
                  These directives instruct all web crawlers (denoted by the wildcard *) to not index any pages on your site (indicated by the forward slash /).
                  Once you've created and uploaded the "robots.txt" file to your website's root directory, search engines should respect these directives and refrain from indexing your site's content.
                  <br /><br />
                  Please note that while most search engines adhere to the directives specified in the "robots.txt" file, it's not a foolproof method to prevent indexing. Some search engines may still index pages despite the directives. Additionally, it's important to periodically review and update your "robots.txt" file as needed.
                  <br /><br />
                  If you have any further questions or need assistance with implementing the "robots.txt" file, please feel free to reach out to us. We're here to help!
                  <br /><br />
                  Warm Regards,<br />
                  [My Name]<br />
                  [My Position/Role]<br />
                  [My Contact Information]
                  <br /><br />
                  <u>Decision Making Process:</u>
                  <ul>
                    <li>
                      I chose to provide a solution using the "robots.txt" file, as it's a standard method for controlling search engine indexing. I opted for clear instructions on creating and implementing the "robots.txt" file, including a sample directive to disallow indexing for the entire site. Additionally, I provided information about the limitations of the "robots.txt" file and the importance of periodic review and updates.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>#9.	What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?
                </Accordion.Header>
                <Accordion.Body>
                  One of the most common problems customers may ask Vercel for help with is likely related to deployment issues or configuration errors when using the Vercel platform for hosting their applications. This could include issues with setting up custom domains, configuring environment variables, handling routing, optimizing performance, or troubleshooting build failures.
                  <br /><br />
                  Short-term solutions for customers experiencing such issues might involve:
                  <ul>
                    <li><u>Documentation and Guides:</u>Providing clear and comprehensive documentation, tutorials, and guides covering common deployment scenarios and troubleshooting steps can empower customers to resolve issues independently.</li>
                    <li><u>Support Channels:</u>Offering responsive customer support through various channels such as live chat, email support, or a community forum where users can seek assistance from Vercel's support team or from other experienced users.</li>
                    <li><u>Quick Fixes:</u>Offering quick fixes or workarounds for common issues while working on a permanent solution.</li>
                    <li><u>Knowledge Base:</u>Maintaining an up-to-date knowledge base with articles addressing common problems and solutions, enabling customers to self-serve and find answers to their queries.</li>
                  </ul>
                  Long-term strategies to address common problems might include:
                  <ul>
                    <li><u>Continuous Improvement:</u>Regularly gathering feedback from customers to identify recurring pain points and areas for improvement in the platform's usability, documentation, and feature set.</li>
                    <li><u>Automated Solutions:</u>Developing automated solutions or tools within the Vercel platform to proactively detect and resolve common deployment issues before they impact users' applications.</li>
                    <li><u>Education and Training:</u>Providing educational resources, webinars, or training sessions to help users better understand best practices for deploying and managing their applications on Vercel.</li>
                    <li><u>Community Engagement:</u>Cultivating an active user community where users can share their experiences, tips, and solutions with one another, fostering a culture of collaboration and mutual support.</li>
                    <li><u>Feature Development:</u>Continuously evolving the platform's features and capabilities to address emerging needs and challenges faced by customers in deploying and managing modern web applications.</li>
                  </ul>
                  By combining short-term solutions for immediate problem resolution with long-term strategies aimed at enhancing the overall user experience and platform functionality, Vercel can effectively support its customers and help them overcome common deployment challenges.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>#10. How could we improve or alter this familiarisation exercise?
                </Accordion.Header>
                <Accordion.Body>
                  To improve or alter the familiarization exercise for a Vercel home assignment, consider the following suggestions:
                  <br /><br />
                  <ul>
                    <li><u>Realistic Scenarios:</u>Provide candidates with real-world scenarios that they are likely to encounter in their role as a Customer Success Engineer at Vercel. This could include tasks such as troubleshooting deployment issues, assisting with custom domain configurations, or providing technical guidance on Next.js projects.</li>
                    <li><u>Interactive Scenario-Based Tasks:</u>Instead of providing a static list, create interactive scenario-based tasks that simulate real-world challenges faced by Customer Success Engineers at Vercel. Candidates could be presented with scenarios where they need to troubleshoot deployment issues, assist customers with custom domain configurations, or provide technical guidance on optimizing performance.</li>
                    <li><u>Real Data Analysis:</u>Provide candidates with real support tickets, logs, or customer inquiries (with sensitive information redacted) to analyze and respond to. This offers a more authentic experience and allows candidates to demonstrate their problem-solving skills in a realistic context.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
