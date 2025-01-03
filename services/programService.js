const programRepo = require("../repository/programRepo");
exports.parseProgramData = async(file) =>{
   const parseProgramFile = programRepo.parsePrograms(file);
   return parseProgramFile;
}