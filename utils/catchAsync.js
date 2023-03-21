/**
 * Handling async function error
 * @param {Function} fn - async function
 */
export const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
};
