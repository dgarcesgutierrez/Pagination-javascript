
export class User {

  /**
   * 
   * @param {Like≤User>} userDataLike 
   */
  constructor({ id, isActive, balance, avatar, firstName, lastName, gender }) {
    this.id = id; 
    this.isActive = isActive; 
    this.balance = balance; 
    this.avatar = avatar; 
    this.firstName = firstName;
    this.lastName = lastName; 
    this.gender = gender; 
  }

}

// Mapper: ente intermedio que sirve para saber como viene la data del backend y generar una instancia de como necesito la data.