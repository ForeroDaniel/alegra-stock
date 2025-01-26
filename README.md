
---

# **Alegra Stock**  

A Next.js-powered tool designed to monitor product stock levels in Alegra, providing actionable insights to help businesses make informed decisions when inventory runs low.

---

## **Table of Contents**  
1. [Overview](#overview)  
2. [Tech Stack](#tech-stack)  
3. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Configuration](#configuration)  
4. [Usage](#usage)  
5. [API Integration](#api-integration)  
6. [Contributing](#contributing)  
7. [License](#license)  
8. [Acknowledgments](#acknowledgments)  

---

## **Overview**  
Alegra Stock is a tool designed to help businesses using Alegra for inventory management. It monitors stock levels in real-time and sends alerts when products fall below a predefined threshold, ensuring timely reordering and efficient inventory management.  

---

## **Tech Stack**  
- **Frontend:** Next.js, React, Tailwind CSS  
- **APIs:** Alegra API  

---

## **Getting Started**  

### **Prerequisites**  
Before running the project, ensure you have the following installed:  
- Node.js (v16 or higher)  
- Alegra API credentials  

### **Installation**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/ForeroDaniel/alegra-stock.git
   ```  
2. Navigate to the project directory:  
   ```bash
   cd alegra-stock
   ```  
3. Install dependencies:  
   ```bash
   npm install
   ```  

### **Configuration**  
1. Create a `.env` file in the root directory and add the following environment variables:  
   ```env
   ALEGRA_API_KEY=your_alegra_api_key
   ```  
2. Create a custom field in Alegra inventory with the name `reorder_point` and type `number`. This field will be used to store the reorder point for each product and will be used by the tool.

---

## **Usage**  
1. Start the development server:  
   ```bash
   npm run dev
   ```  
2. Access the application at `http://localhost:3000`.  

---

## **API Integration**  
This project integrates with the [Alegra API](https://developer.alegra.com/) to fetch product and inventory data. Refer to the Alegra API documentation for details on endpoints and authentication.  

---

## **License**  
This project is licensed under the GNU General Public License (GPL) License.  

---

## **Acknowledgments**  
- [Alegra](https://developer.alegra.com/) for their API.  
- The Next.js and Tailwind CSS communities for their amazing tools and resources.  

---