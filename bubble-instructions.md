# Healthcare Dashboard Implementation Guide for Bubble.io

This guide will help you implement the healthcare dashboard shown in the image using Bubble.io.

## Overview

The provided HTML and CSS files contain the complete structure and styling for the healthcare dashboard. In Bubble.io, you'll need to:

1. Create the visual elements using Bubble's UI components
2. Set up the data structure
3. Configure workflows and interactions

## Implementation Steps in Bubble.io

### 1. Set Up Data Types

Create the following data types in Bubble:

- **Patients**
  - Name (text)
  - Email (text)
  - Photo (image)
  - Appointment Date (date)
  
- **Assessments**
  - Patient (Patient reference)
  - Date (date)
  - Status (text: "today", "days left", "weeks left")
  - Days Remaining (number)
  
- **Apps**
  - Name (text)
  - Category (text)
  - Icon (image)
  - Percentage (number)
  - Type (text: "glycemic", "heart", "sleep", "fitness")

### 2. Create the UI Layout

#### Main Layout
1. Create a new page called "Dashboard"
2. Add a Group element and set it to be a flex container with direction "row"
3. Inside this group, add two more groups:
   - Sidebar (fixed width: 220px)
   - Main Content (flexible width)

#### Sidebar
1. In the Sidebar group, add:
   - Text element for the logo "Evalia"
   - Repeating group for menu items with icons
   - Set the first item (Dashboard) as active

#### Header
1. In the Main Content group, add a header group with:
   - Text element for "Welcome back, Dr. [Name]"
   - Icon buttons for notifications
   - User profile section with avatar and name

#### Dashboard Content
1. Create two column groups:
   - Left column (width: 66%)
   - Right column (width: 33%)

2. In the left column, add:
   - Blue card with "Find the best fit for your patient" text and button
   - Assessment results card with repeating groups for each category

3. In the right column, add:
   - Calendar card
   - This week's assessments card
   - This month's assessments card

### 3. Style Your Elements

Use the Custom CSS plugin to add the CSS from the provided file. Alternatively, you can style each element individually using Bubble's styling options:

1. Set background colors, border radius, and shadows for cards
2. Style text elements with appropriate fonts, sizes, and colors
3. Create custom states for active elements
4. Style the calendar with grid layout

### 4. Add Interactions

1. Make the "Start assessment" button navigate to an assessment page
2. Make calendar dates selectable
3. Make patient entries clickable to view patient details
4. Add navigation between dashboard sections

### 5. Connect to Data

1. Populate the assessment cards with data from your Apps data type
2. Filter apps by their type to display in the correct sections
3. Show real patient data in the assessment lists
4. Calculate days/weeks left for appointments

## Custom HTML/CSS Integration

If you prefer to use the exact HTML/CSS provided:

1. Install the "HTML Element" plugin in Bubble
2. Create an HTML element on your page
3. Paste the HTML code from healthcare-dashboard.html
4. Add the CSS from healthcare-dashboard.css to the page's custom CSS section

## Important Notes for Bubble.io Implementation

- Replace static content with dynamic data using Bubble's dynamic data binding
- Use Bubble's Responsive Engine to ensure the layout works on different screen sizes
- For icons, either use Bubble's built-in icon set or upload custom icons
- The calendar functionality will need to be built using Bubble's date picker or custom states

By following these steps, you'll be able to recreate the healthcare dashboard shown in the image using Bubble.io's no-code platform.