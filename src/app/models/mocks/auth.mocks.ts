import { IAuthResponse } from '..';

export const AUTH_MOCKS: IAuthResponse = 
{
   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoyMDAwMDAwMDAwfQ.7pZ0l6m7Q0cW5o5H1gQ8x3wY2k8f4b9c1d2e3f4a5b6c",
   expires: new Date(Date.now() + 286400000),
   user: {
    id: "3b241101-e2bb-4255-8caf-4136c566a962",
    username: "Test Testov",
    email: "test_testov@mymediacollection.online"
   }
};
