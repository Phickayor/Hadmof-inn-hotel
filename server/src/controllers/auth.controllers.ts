const login = async (
  req: { body: { email: String; password: String } },
  res: any
) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};
