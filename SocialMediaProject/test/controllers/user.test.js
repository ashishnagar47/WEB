const {expect}=require("chai")

const {
    createAnonUser,
    getUserById,
    getUserByUsername
}=require('../../src/controllers/users')

describe('controllers/users',()=>{
    let createdUser=null
    it('should create anonymous user',async()=>{
        createdUser=await createAnonUser()
        expect(createdUser.id).to.be.a('number')
        expect(createdUser).to.have.property('username')
    })

    it('should find user by userId',async()=>{
       let foundUser=await getUserById(createdUser.id)
       expect(foundUser.username).to.equal(createdUser.username)
    })

    it('should find user by username',async()=>{
        let foundUser=await getUserByUsername(createdUser.username)
       expect(foundUser.id).to.equal(createdUser.id)
    })
})