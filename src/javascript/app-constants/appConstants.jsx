const appConstants = {
    monthName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    country: [
                    {name:'india', code: 91},
                    {name:'us', code: 1},
                    {name:'nepal', code: 10}
                  ],
    monthIndex: [0,1,2,3,4,5,6,7,8,9,10,11],
    characterCounts: {
        firstNameLimit: 30
    },
    noData: `NA`,
    validationRules: {
        titleRequired: {
            rule: `isRequired`,
            errorMessage: `firstName is required`
        }
    }
}
export default appConstants;
