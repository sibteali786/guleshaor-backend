const { createEvent, getEventbyId } = require("../controllers/eventController");
const isAuthenticated = require("../middleware/authMiddleware");

router.route("/create").post(isAuthenticated, createEvent);
router.route("/get/:userId").get(getEventbyId);
