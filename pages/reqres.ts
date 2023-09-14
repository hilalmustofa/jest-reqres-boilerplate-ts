import supertest from "supertest";

export async function CreateUser(name:string ,job:string) {
  try {
    const res = await supertest(process.env.baseurl)
      .post("/api/users")
      .set("Content-Type", "application/json")
      .send({
        name: name,
        job: job,
      });
    return res;
  } catch (error) {
    throw error;
  }
}

export async function GetUserList() {
  try {
    const res = await supertest(process.env.baseurl)
      .get("/api/users")
      .set("Content-Type", "application/json")
      .send();
    return res;
  } catch (error) {
    throw error;
  }
}

export async function UpdateUser(name:string, job:string) {
  try {
    const res = await supertest(process.env.baseurl)
      .put("/api/users/2")
      .set("Content-Type", "application/json")
      .send({
        name: name,
        job: job,
      });
    return res;
  } catch (error) {
    throw error;
  }
}

export async function DeleteUser(userid:number) {
  try {
    const res = await supertest(process.env.baseurl)
      .delete(`/api/users/${userid}`)
      .set("Content-Type", "application/json")
      .send();
    return res;
  } catch (error) {
    throw error;
  }
}
