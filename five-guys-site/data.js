// 修改此文件即可更新成员、分工、各次交付和资源链接。
// 未提供的信息保持待补充；不要把示例状态当作真实交付状态。
window.PROJECT_DATA = {
  members: [
    { initials: 'PC', name: 'Luyu Niu', role: 'Project Manager', cases: ['Search Available Jobs','Create and Publish a Job Posting','Manage Accounts and Roles'] },
    { initials: '02', name: 'Yuting Mei', role: 'Design Engineer', cases: ['Submit Job Application','Save Job Posting','Manage Job Posting'] },
    { initials: '03', name: 'Xinyi Chen', role: 'Requirements Engineer', cases: ['Register Account','User Login','Maintain Applicant Profile'] },
    { initials: '04', name: 'Peter Chen', role: 'Quality Assurance Engineer', cases: ['Respond to Job Offer', 'Update Application Stage', 'Review Submitted Applications'] },
    { initials: '05', name: 'Spencer Hammack ', role: 'Project Librarian', cases: ['Track Application Stage','Withdraw an Application','Schedule an Interview'] }
  ],
  iterations: [
    { name: 'Iteration 1', short: 'Analysis & design', status: 'DELIVERY STATUS TO BE CONFIRMED', title: 'Start with a shared understanding.', description: 'Requirements and design artifacts establish the scope and structure of the recruiting system.', items: ['Project vision and requirements', 'Fully dressed use cases and domain model', 'Sequence diagrams and design class diagram'], url: '', linkLabel: 'View iteration 1 deliverables' },
    { name: 'Iteration 2', short: 'Implementation & review', status: 'DELIVERY STATUS TO BE CONFIRMED', title: 'Turn the design into working software.', description: 'Bring together implementation progress, interface evidence, and the next steps for delivery.', items: ['Current implementation status and roadblocks', 'UI screenshots with use case owner and backend connection status', 'Updated documentation, sequence diagrams, and class diagram', 'Prototype walkthrough and project website'], url: '', linkLabel: 'View iteration 2 deliverables' },
    { name: 'Iteration 3', short: 'Integration & delivery', status: 'PROPOSED SCOPE · TO BE CONFIRMED', title: 'Bring the whole experience together.', description: 'A proposed final delivery outline. Confirm the scope against the course requirements before submission.', items: ['Integrated application and regression testing', 'Final documentation and user guide', 'Demonstration and release package'], url: '', linkLabel: 'View iteration 3 deliverables' }
  ],
  resources: [
    { title: 'Status Report', description: 'Implementation, commits, and collaboration.', url: 'downloads/Iteration2_Status_Report_Team3.pdf' },
    { title: 'Project board', description: 'Trello or Jira · tasks, ownership, and progress.', url: 'https://csi5324.atlassian.net/jira/software/projects/KAN/boards/1?filter=&groupBy=none' },
    { title: 'Documentation', description: 'Requirements, use cases, and design artifacts.', url: 'https://docs.google.com/document/d/1NK1_mC86pCefdBCBaigEEdLV5yKWJGIi/edit' },
    {
      title: 'Implementation',
      description: 'Iteration 2 implementation package.',
      url: '/downloads/iteration2.zip'
    }  ]
};
