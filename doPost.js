/**
 * Simple handler for GET requests
 */
function doGet(e) {
  return HtmlService.createHtmlOutput("Form submission API is running.");
}

/**
 * Handles form submissions and adds data to the spreadsheet
 */
function doPost(e) {
  // Log the incoming request for debugging
  Logger.log("POST request received: " + JSON.stringify(e));

  // Handle preflight OPTIONS request (for CORS)
  if (e.postData === undefined) {
    return ContentService.createTextOutput("")
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type")
      .setHeader("Access-Control-Max-Age", "1728000");
  }

  try {
    // Parse the JSON data from the request
    const jsonData = JSON.parse(e.postData.contents);
    Logger.log("Parsed data: " + JSON.stringify(jsonData));

    // Get direct access to the spreadsheet using ID
    const spreadsheetId = "1naHOw8XRMR99w8xyeeHmw17BwDTKsr11e_tCccRDtPc";
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheets()[0]; // Get the first sheet

    // Format the data for the spreadsheet
    const rowData = [
      new Date(), // Current timestamp
      jsonData["Student Name"] || jsonData.studentName || "",
      jsonData["Parent Name"] || jsonData.parentName || "",
      jsonData.Email || jsonData.email || "",
      jsonData.Phone || jsonData.phone || "",
      jsonData.School || jsonData.school || "",
      jsonData.Grade || jsonData.grade || "",
      jsonData.Course || jsonData.course || "",
      jsonData["Course Type"] || jsonData.courseType || "",
      jsonData.Message || jsonData.message || "",
    ];

    // Add the row to the spreadsheet
    sheet.appendRow(rowData);
    Logger.log("Row successfully added to spreadsheet");

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form data successfully recorded",
      })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  } catch (error) {
    // Log detailed error information
    Logger.log("Error in doPost: " + error.message);
    Logger.log("Stack trace: " + error.stack);

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error: " + error.message,
      })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
}
