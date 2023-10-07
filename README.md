# Billing Dashboard React App

## Overview

The Billing Dashboard is a React web application designed to simplify the process of managing and creating bills for items and customers. This application allows users to add items and customers to the master database, create bills for selected items and customers, and view previous bills in a user-friendly dashboard.

## Features

### 1. Billing Dashboard - Master

In the "Master" section of the Billing Dashboard, you can perform the following actions:

- **Add Items**: You can add items to the master database. Each item should have a name, description, price, and stock status. Inactive items, which are similar to "out of stock" items, cannot be selected when creating bills.

- **Add Customers**: You can add customers to the master database. Each customer should have a name, contact information, and optionally, a GST (Goods and Services Tax) number. If a customer has a GST number, the system will automatically charge 18% GST on their bills.

### 2. Billing

In the "Billing" section of the application, you can create bills for customers using the items from the master database. Here's how it works:

- **Select Customer**: Choose a customer from the list of customers in the master database.

- **Add Items to Bill**: Select items from the list of available items in the master database to include them in the bill. Inactive items cannot be selected.

- **Calculate Total**: The application will automatically calculate the total amount for the bill, including GST if applicable.

- **Generate Invoice ID**: After finalizing the bill, an invoice ID will be generated and associated with the bill. This ID can be used for reference and searching in the future.

### 3. Dashboard

In the "Dashboard" section of the application, you can view and search for previous bills:

- **View Previous Bills**: A table displays all previous bills, including the invoice ID, customer information, total amount, and date.

- **Search by Invoice ID**: You can search for a specific bill by entering its invoice ID in the search field. The table will filter out the results based on your search criteria.

## Getting Started

To run the Billing Dashboard React App locally, follow these steps:

1. Clone the repository to your local machine:

2. Navigate to the project directory:

3. Install dependencies:

4. Start the development server:

The application will be accessible in your web browser at `http://localhost:3000`.

## Technologies Used

- React: The frontend is built using the React JavaScript library for building user interfaces.
- CSS: Styling is implemented using CSS to create an attractive and user-friendly interface.

## Contributors

This Billing Dashboard React App was developed by Brijesh. If you have any questions or encounter any issues, please feel free to contact us.

## License

This project is licensed under the [License Name]. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

We would like to thank the React community and the developers of any libraries or tools used in this project for their contributions to open source software.

Thank you for using the Billing Dashboard React App! We hope it helps streamline your billing and invoicing processes. If you have any feedback or suggestions for improvements, please let us know.
