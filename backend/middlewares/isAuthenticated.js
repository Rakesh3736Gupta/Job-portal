import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {

//     try {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.status(401).json({
//                 message: "User not authenticated",
//                 success: false,
//             })
//         }
//         const decode = await jwt.verify(token, process.env.SECRET_KEY);
//         if(!decode){
//             return res.status(401).json({
//                 message:"Invalid token",
//                 success:false
//             })
//         };
//         req.id = decode.userId;
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default isAuthenticated;

// const isAuthenticated = async (req, res, next) => {
//     try {
//         const token = req.cookies.token; // Get the token from cookies
//         if (!token) {
//             return res.status(401).json({
//                 message: "User not authenticated",
//                 success: false,
//             });
//         }

//         // Verify the token
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);
//         if (!decoded) {
//             return res.status(401).json({
//                 message: "Invalid token",
//                 success: false,
//             });
//         }

//         // Attach the user ID to the request object
//         req.id = decoded.userId; // Ensure that userId is part of the decoded token

//         // Proceed to the next middleware or route handler
//         next();
//     } catch (error) {
//         console.error("Authentication error:", error); // Log the error for debugging
//         return res.status(401).json({
//             message: "Authentication failed",
//             success: false,
//         });
//     }
// };

// export default isAuthenticated;

// const isAuthenticated = async (req, res, next) => {
//     try {
//       const authHeader = req.headers.authorization;

//       if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({
//           message: "User not authenticated",
//           success: false,
//         });
//       }

//       const token = authHeader.split(" ")[1]; // Extract the token from "Bearer <token>"
//       const decode = await jwt.verify(token, process.env.SECRET_KEY);

//       if (!decode) {
//         return res.status(401).json({
//           message: "Invalid token",
//           success: false,
//         });
//       }

//       req.id = decode.userId;
//       next();
//     } catch (error) {
//       console.log(error);
//       return res.status(401).json({
//         message: "Authentication failed",
//         success: false,
//       });
//     }
//   };

//   export default isAuthenticated;

// import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {
//   try {
//     // Check if the token exists in cookies
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({
//         message: "User not authenticated",
//         success: false,
//       });
//     }

//     // Verify the token
//     const decode = jwt.verify(token, process.env.SECRET_KEY);

//     // If token verification fails
//     if (!decode) {
//       return res.status(401).json({
//         message: "Invalid token",
//         success: false,
//       });
//     }

//     // Attach user information (userId in this case) to the request object
//     req.id = decode.userId;
//     req.user =token ;
//     // Proceed to the next middleware or route handler
//     next();
//   } catch (error) {
//     console.error("Authentication error:", error);
//     return res.status(401).json({
//       message: "Token verification failed. Please log in again.",
//       success: false,
//     });
//   }
// };

const isAuthenticated = async (req, res, next) => {
  console.log("Cookies received:", req.cookies); // Log received cookies

  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.id = decode.userId;
    req.user = token;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({
      message: "Token verification failed. Please log in again.",
      success: false,
    });
  }
};

export default isAuthenticated;
