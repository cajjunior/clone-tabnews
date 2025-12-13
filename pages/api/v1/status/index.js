function status(Request, Response) {
  Response.status(200).json({ chave: "São acima da média" });
}

export default status;
