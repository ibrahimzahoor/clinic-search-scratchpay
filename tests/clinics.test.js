const request = require("supertest");
const app = require("../src/index");

// Testing the API endpoint for various scenarios
describe("GET /search-clinics", () => {
  it("should return all clinics", async () => {
    const res = await request(app).get("/search-clinics");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /search-clinics", () => {
  it("should return a clinic which includes the name Good", async () => {
    const res = await request(app).get("/search-clinics?name=Good");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body.findIndex(clinic => !clinic.name.includes("Good"))).toBe(-1)
  });
});


describe("GET /search-clinics", () => {
  it("should return a clinic based on multi search", async () => {
    const res = await request(app).get("/search-clinics?state=California&from=00:00");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body.findIndex(clinic => !clinic.state.includes("California") && !clinic.from == "00:00")).toBe(-1)
  });
});

describe("GET /search-clinics", () => {
  it("should return a clinic based on multi search", async () => {
    const res = await request(app).get("/search-clinics?state=California&from=00:00");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body.findIndex(clinic => !clinic.state.includes("California") && !clinic.from == "00:00")).toBe(-1)
  });
});

describe("GET /search-clinics", () => {
  it("should return all clinics when any wrong parameter is passed", async () => {
    const res = await request(app).get("/search-clinics?xyz=California");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body.findIndex(clinic => clinic.state.includes("California"))).toBeGreaterThan(-1)
  });
});

