/* Call Intelligence — Mock Data */

const CALL_DATA = {
  roles: ["CEO", "Admin", "Team Lead", "Sales Manager", "Sales Executive"],
  integration: { name: "Call Laser Biz", status: "Planned", note: "Future integration — API connector ready" },

  kpis: {
    totalCalls: 2846,
    connectedCalls: 2184,
    missedCalls: 412,
    talkTime: "186h 42m",
    avgDuration: "4m 12s",
    successRate: "76.7%",
    conversionRate: "18.4%"
  },

  liveCalls: [
    { caller: "Rahul Sharma", number: "+91 98765 43210", agent: "Diksha", duration: "03:24", direction: "Inbound", status: "Connected" },
    { caller: "Priya Nair", number: "+91 87654 32109", agent: "Swetha", duration: "01:08", direction: "Outbound", status: "Ringing" },
    { caller: "Unknown", number: "+91 76543 21098", agent: "Himani Bhargava", duration: "00:00", direction: "Inbound", status: "Queued" }
  ],

  callHistory: [
    { id: "CALL-2024-1842", contact: "Meera Iyer", agent: "Diksha", direction: "Outbound", duration: "8m 42s", outcome: "Meeting Scheduled", date: "25 Jun, 10:38 AM", recording: true },
    { id: "CALL-2024-1841", contact: "Rahul Sharma", agent: "Swetha", direction: "Inbound", duration: "5m 18s", outcome: "Qualified Lead", date: "25 Jun, 10:15 AM", recording: true },
    { id: "CALL-2024-1840", contact: "Vikram Patel", agent: "Himani Bhargava", direction: "Outbound", duration: "0m 00s", outcome: "No Answer", date: "25 Jun, 9:52 AM", recording: false },
    { id: "CALL-2024-1839", contact: "Anita Desai", agent: "Diksha", direction: "Inbound", duration: "12m 06s", outcome: "Proposal Sent", date: "25 Jun, 9:30 AM", recording: true },
    { id: "CALL-2024-1838", contact: "Karthik Reddy", agent: "Swetha", direction: "Outbound", duration: "3m 45s", outcome: "Follow-up", date: "24 Jun, 5:45 PM", recording: true }
  ],

  recordings: [
    { id: "REC-1842", call: "CALL-2024-1842", contact: "Meera Iyer", agent: "Diksha", duration: "8m 42s", size: "4.2 MB", date: "25 Jun 2024" },
    { id: "REC-1841", call: "CALL-2024-1841", contact: "Rahul Sharma", agent: "Swetha", duration: "5m 18s", size: "2.8 MB", date: "25 Jun 2024" },
    { id: "REC-1839", call: "CALL-2024-1839", contact: "Anita Desai", agent: "Diksha", duration: "12m 06s", size: "6.1 MB", date: "25 Jun 2024" }
  ],

  employeeActivity: [
    { name: "Himani Bhargava", calls: 186, connected: 148, talkTime: "18h 24m", conversion: "22%", score: 94 },
    { name: "Diksha", calls: 142, connected: 118, talkTime: "14h 12m", conversion: "19%", score: 88 },
    { name: "Swetha", calls: 128, connected: 96, talkTime: "11h 48m", conversion: "16%", score: 82 },
    { name: "Abrar", calls: 98, connected: 82, talkTime: "9h 36m", conversion: "21%", score: 86 }
  ],

  dailyReport: {
    date: "25 Jun 2024",
    inbound: 48, outbound: 62, missed: 14, connected: 88,
    talkTime: "6h 42m", avgDuration: "4m 18s", conversions: 8
  },

  monthlyReport: {
    month: "June 2024",
    totalCalls: 2846, connected: 2184, missed: 412,
    talkTime: "186h 42m", successRate: "76.7%", conversions: 142
  },

  timeline: [
    { title: "Inbound call — Rahul Sharma", user: "Swetha", time: "25 Jun, 10:15 AM", desc: "5m 18s · Qualified Lead" },
    { title: "Outbound call — Meera Iyer", user: "Diksha", time: "25 Jun, 10:38 AM", desc: "8m 42s · Meeting Scheduled" },
    { title: "Missed call — Vikram Patel", user: "Himani Bhargava", time: "25 Jun, 9:52 AM", desc: "Callback scheduled" },
    { title: "Recording saved — Anita Desai", user: "Diksha", time: "25 Jun, 9:30 AM", desc: "12m 06s · Proposal Sent" }
  ]
};
