/** @class User creates a new user whether is employee or user*/ 
export class User {
    /**
     * 
     * @param {number} idUser is the unique number of identification
     * @param {boolean} isEmployee is a bolean flag to know if an instance of class is employee or client with default set to false if value set to 0 or falsy
     * @param {string} name the name of the user set it's name to upper case 
     * @param {string} email is the email of the user and set it's email to lower case
     * @param {string} profileImg user's profile image with default image to muted profile image if value set to 0 or falsy
     * @param {string} municipal_delegation user associated to a town
     * @param {string} state  user associated to a city
     */
    constructor(idUser, isEmployee , name, email,
     municipal_delegation, state,zip,stret,numExt,numInt,password,description, profileImg="./../images/profile_mute.png"){
        this.idUser = idUser;
        this.isEmployee = isEmployee;
        this.name = name.toUpperCase();
        this.email = email.toLowerCase();
        this.profileImg = profileImg; //if 
        this.municipal_delegation = municipal_delegation;
        this.state = state;
        this.zip=zip;
        this.stret=stret;
        this.numExt=numExt;
        this.numInt=numInt;
        this.password=password;
        this.description=description;

        /**
         * properties not requested by instance of class
         */
        this.clientReviews = [];
        this.categories = [];
        this.subcategories = [];
        this.stars = 0;
    }

    /**
     * getClientReviews
     * @returns {object} returns a set of objects within an array
     */
    getClientReviews(){
        return this.clientReviews;
    }

    /**
     * getCategories
     * @returns {object} returns a set of objetcs within an array
     */
    getCategories(){
        return this.categories;
    }

    /**
     * getSubcategories
     * @returns {object} returns a set of objects within an array
     */
    getSubcategories(){
        return this.subcategories;
    }

    /**
     * getStars
     * @returns {number} returns a number of stars accumulated by the user
     */
    getStars(){
        if(this.clientReviews.length > 0){
            this.setStars();
        }
        return this.stars;
    }

    /**
     * getTotalReviews
     * @returns {number} returns the number of reviews done by the client
     */
    getTotalReviews(){
        return this.clientReviews.length;
    }
     /**
      * 
      * @param {number} idOfClient retrieves the client's id
      * @param {string} nameOfClient retrives the client's name
      * @param {number} starsOfJob floating number of the score from 0 to 5 to show the performance of the job done
      * @param {string} commentOfClient set of characters from the client's opinion from the job done by the employee
      */
    setClientReviews(idOfClient, nameOfClient, starsOfJob, commentOfClient){
        this.clientReviews.push(
            { 
                clientId: idOfClient, 
                clientName: nameOfClient,
                starsForJob: starsOfJob, 
                comment: commentOfClient 
            }
        )
    }
    /**
     * @param {array} can have infinite number of categories an they will be added to this.categories array as a string
     */
    setCategories(arrayOfCategories){
        arrayOfCategories.forEach( (category)=>{
            this.categories.push(category);
        } )
        this.isEmployee = true;
    }

    /**
     * setSubcategories
     * @param {array} can have infinite number of subcategories an they will be added to this.subcategories array as a string
     */
    setSubcategories(arrayOfSubCategories){
        arrayOfSubCategories.forEach( (subcategory)=>{
            this.subcategories.push( subcategory );
        } )
    }

    /**
     * setStars
     * modify the number of stars depending on the number of client reviews 
     */
    setStars(){

        if(this.clientReviews.length >= 0 ){
            this.clientReviews.forEach((element)=>{
                this.stars += element.starsForJob;
            })
            this.stars /=this.getTotalReviews();
        }
        
    }
}