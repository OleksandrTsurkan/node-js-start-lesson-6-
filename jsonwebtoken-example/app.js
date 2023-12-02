const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const payload = {
  id: "656b535ea408b1bfc1d83ece",
};

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24000d" });
console.log(token);

const decodeToken = jwt.decode(token);
console.log(decodeToken);

try {
  const { id } = jwt.verify(token, SECRET_KEY);
  console.log(id);
  const invalidToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmI1MzVlYTQwOGIxYmZjMWQ4M2VjZSIsImlhdCI6MTcwMTU0NTc2MSwiZXhwIjozNzc1MTQ1NzYxfQ.ePx1-QSKx_TeB1XQPNmTuBQUef9E5oVYQPS2Ol4HkS0";
  const result = jwt.verify(invalidToken, SECRET_KEY);
} catch (error) {
  console.log(error.message);
}