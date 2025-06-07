describe("Other HTTP verbs on /api/v1/status", () => {
  describe("Anonymous user", () => {
    test("POST request should return 405", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status", {
        method: "POST",
      });
      expect(response.status).toBe(404);
    });
  });
});
