export default function sendResponse(res, data, statusCode = 200) {
  res.status(statusCode).json(data);
}
