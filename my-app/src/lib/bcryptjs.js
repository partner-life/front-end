import bcryptjs from "bcryptjs";

const hashPassword = (password) => {
  return bcryptjs.hashSync(password, 10);
};

const comparePassword = (password, db_password) => {
  return bcryptjs.compareSync(password, db_password);
};

export { hashPassword, comparePassword };
