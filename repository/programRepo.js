const XLSX = require('xlsx');

exports.parsePrograms = (file) => {
      const workbook = XLSX.read(file, { type: 'buffer' });
        const programSheet = workbook.Sheets['programData'];
        const tasksSheet = workbook.Sheets['taskData'];

        const skillsSheet = workbook.Sheets['skillsData'];
        const departmentSheet = workbook.Sheets['departmentData'];
        const designationSheet = workbook.Sheets['designationData'];
        const outcomeSheet = workbook.Sheets['programOutcomeData'];


        const programsData = XLSX.utils.sheet_to_json(programSheet);
        const tasksData = XLSX.utils.sheet_to_json(tasksSheet);
        const skillsData = XLSX.utils.sheet_to_json(skillsSheet);
        const departmentData = XLSX.utils.sheet_to_json(departmentSheet);
        const designationData = XLSX.utils.sheet_to_json(designationSheet);
        const outcomeData = XLSX.utils.sheet_to_json(outcomeSheet);

        const programs = programsData.map(program => {
            return {
                programData: {
                    programName: program.programName,
                    programDescription: program.programDescription,
                    pointsPerDayPerPerson: program.pointsPerDayPerPerson,
                    coinsPerDayPerPerson: program.coinsPerDayPerPerson || null,
                    programType: program.programType,
                    programDifficultyLevel: program.programDifficultyLevel,
                    programMinDuration: program.programMinDuration,
                    programPicture: program.programPicture,
                    programCategory: program.programCategory,
                    programOutcome: program.programOutcome
                },
                tasksData: tasksData.filter(task => task.programName === program.programName).map(task => ({
                    taskName: task.taskName,
                    taskDescription: task.taskDescription,
                    taskType: task.taskType,
                    taskMinDuration: task.taskMinDuration,
                    taskPoints: task.taskPoints,
                    taskCoins: task.taskCoins || null
                })),
                skillsData: skillsData.filter(skill => skill.programName === program.programName).map(skill => skill.skillId),
                departmentData: departmentData.filter(department => department.programName === program.programName).map(dept => dept.departmentId),
                designationData: designationData.filter(designation => designation.programName === program.programName).map(desig => desig.designationId),
                programOutcomeData: outcomeData.filter(outcome => outcome.programName === program.programName).map(out => out.outcomeName)
            };
        });
        return programs;
}

exports.uploadPrograms = async() =>{
    
}
