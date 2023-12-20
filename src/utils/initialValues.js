// eslint-disable-next-line
export const getInitialValues = (formType) => {
    // eslint-disable-next-line
    switch (formType) {
        case 'addItem':
            return{
                name: "",
                weather: "",
                imageUrl: "",
            }
        case 'signUp':
            return{
                email:"",
                password:"",
                name:"",
                avatar:"",
            }
        case 'login':
            return{
                email:"",
                password:"",
            }
    }

}
