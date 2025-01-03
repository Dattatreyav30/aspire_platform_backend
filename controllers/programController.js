const variables = require('../helpers/static');
const programService = require("../services/programService");
const validation = require("../helpers/joi");


exports.getStaticVariables = async (req, res, next) => {
    try {
        res.status(200).json({
            status: true, data: {
                variables
            },
            message: variables.messages.sucessfull
        })
    } catch (error) {
        res.status(500).json({ status: false, data: {}, message: error.message })
    }
}

exports.postUploadPrograms = async (req, res, next) => {
    try {
        if (!req.file) return res.status(400).json({ status: false, data: {}, message: variables.messages.fileNotFound });
        const file = req.file.buffer;
        const sheetNames = variables.requiredSheets;
        const { error } = validation.sheetValidationSchema.validate({ sheets: sheetNames });
        if (error) return res.status(400).json({ status: false, data: {}, message: error.details[0].message });
        const parseFileDataService = await programService.parseProgramData(file);
        res.status(200).json({
            status: true, data: { parseFileDataService },
            message: variables.messages.sucessfull
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({ status: false, data: {}, message: error.message })
    }
}