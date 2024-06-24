export default class Token{
    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikplc3VzIENyaXN0byIsImlhdCI6MTUxNjIzOTAyMn0.Wq0xiSAUYX4LLho-UT7eVACrWA-rNnCuUNBW0jOxKzY';

    getToken(): string {
        return this.token;
    }
}