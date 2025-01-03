const Joi = require('joi');

const sheetValidationSchema = Joi.object({
    sheets: Joi.array()
        .items(Joi.string())
        .has('programData')
        .has('taskData')
        .has('skillsData')
        .has('departmentData')
        .has('designationData')
        .has('programOutcomeData')
        .required()
        .messages({
            'array.has': 'Missing required sheet: {#value}',
            'any.required': 'No sheets were found in the workbook',
        }),
});

module.exports = { sheetValidationSchema };
