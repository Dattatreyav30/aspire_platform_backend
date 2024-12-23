import variables from '../helpers/static';


exports.getStaticVariables = async (req, res, next) => {
    try {
        res.status(200).json({ status: true, data: { variables } })
    } catch (error) {
        res.status(500).json({ status: false, data: { message: error.message } })
    }
}

