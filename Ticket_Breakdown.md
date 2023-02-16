# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1 - Create a new table Facility_Agent_Ids to include a custom id for agents working for a facility. 

**Acceptance Criteria**

I want to store a custom id for an agent working for a facilityt
**Time/Effort Estimate**
0.5

**Implementation Details**

Create a new table  Facility_Agent_Ids which will include the facility_id, agent_id and custom_id as columns.

### Ticket 2 - Update function to create a shift to insert custom agent id into Facility_Agent_Ids table

**Acceptance Criteria**

I want to add a custom id for an agent working for a facility to Facility_Agent_Ids table when a new shift is created

**Time/Effort Estimate**
1

**Implementation Details**

Update the logic of create shift function. Insert a new row into the Facility_Agent_Ids table using the facility_id, agent_id and custom_id parameters passed to the function.



### Ticket 3 - Update UI for shift creation to include a text field to add a custom id for the agent

**Acceptance Criteria**

As a facility, I want to add a custom id for the agent when a new shift is created

**Time/Effort Estimate**
2

**Implementation Details**

Update the UI form for shift creation to include a textr field to capture id for agent. This should be a mandatory field. Show suggestions based on the following combinations.

 - Facility Id + Agent Id
 - Facility Name + Agent Id
 - Abbreviation of facilty name(preferably two letters) + Agent id



  





