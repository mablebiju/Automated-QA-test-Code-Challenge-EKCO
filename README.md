# Automated-QA-test-Code-Challenge-EKCO
This my solutions for the two code test challenges for submission on 6/11/2023 - (Monday)

My Approach - 

API Testing:
In this project, I embarked on the journey of API testing using Playwright, a framework I hadn't previously worked with. To get started, I dove into the fundamentals of Playwright and attempted to conduct tests in the online Playwright code editor. Unfortunately, I encountered an error - 'request.post ECONNREFUSED,' which I struggled to resolve. As a result, I switched to Visual Studio Code and leveraged JavaScript, incorporating two crucial libraries/packages. The 'expect' function, sourced from the "@playwright/test" package, is a widely recognized assertion library that's closely associated with Playwright. It played a pivotal role in defining and validating expectations during the testing process. Additionally, I made use of the 'request' object from the "supertest" package, a highly-regarded library tailored for making HTTP requests, specifically tailored for API testing. This library simplifies the process of sending HTTP requests (such as GET, POST, DELETE) to a server and receiving responses, making it an invaluable asset for API testing scenarios. I meticulously performed all assertions and meticulously verified each one. For reference, I have attached screenshots showcasing the process.

Front-End Testing:
I've written a set of test cases using the Playwright testing framework to assess the functionality and user interactions within a web application. In these test cases, I've used the test and expect functions imported from the "@playwright/test" package.  I'm pleased to report that I've successfully passed all the core assertions, ensuring the integrity of the testing process. To enhance clarity and facilitate understanding, I've accompanied each test with clear comments that shed light on the rationale behind each action. Furthermore, I've supplemented the documentation with screenshots, enabling easy reference and visual validation. In my pursuit of accuracy, I've meticulously inspected the frontend elements, delving deep into the code to pinpoint the correct selectors. I've also crosschecked the visibility of each element to guarantee that the tests are robust and dependable.My understanding from these test cases is that they aim to ensure the web application functions as expected. They check for correct page titles, appropriate form visibility, and the handling of error messages during user interactions. Playwright, through its "test" and "expect" functions, enables the creation of robust and automated web application tests to validate its behavior and user-friendliness.

6/11/2023- I have experience with the Page Object Model (POM) and understand its benefits in structuring and organizing automated tests for web applications. However, due to time constraints, I chose to reuse certain methods in the provided test cases instead of fully implementing the POM. I acknowledge that utilizing POM can make testing more reliable and efficient by separating the page interactions and elements into reusable components, improving maintainability and scalability. I plan to work on implementing the POM model in parallel with my testing efforts and will update the link once I complete the transition to POM to enhance the overall test suite.

7/11/2023 - I have taken one additionally day to implement the POM. I had to do research and understand the structure of it and clear off issues. I hope you take a look into my new "POM_FEtesting" file and consider it as my final submission. Thanks a mil:)







