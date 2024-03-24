class Config {
    // Determines location where the update script is stored on server (only needed when sendDataToServer is true)
    static serverRequestLink = 'http://david.jamnig.net/tests/fittslaw/server/update.php';
    static sendDataToServer = false;

    // Calculation - Fullscreen -> Get windowInnerWidth/Height as resolution and inch of screen. Then calculate the ppi
    // PPI cannot be determined by plain javascript
    static ppi = 132.34;       // Determines proper size of elements (so that 1cm equals 1cm on every phone //Laptop: 141.21, Ipad: 132.34
    static shape = "rectangle"; // rectangle or circle (circle not adjusted)
    static intDevice = "mouse".toLowerCase(); // Mouse, Touch (when touch enabled, mouseclick will not work) //mouse for laptop or touch
    static trialsPerBreakTestSet = 27;
    static trialsPerBreakPracticeSet = 4;
    static generalUsername = "none"; // Will be displayed in dataset when no username was entered
    static version = "8.4";


     //TODO: change for studie:
    static run = "1";                                   //1-6 or 1-3
    static input_device = "Finger"                      //Finger or Stylus
    static isTestSet = true;                           // Determines, if test or trainings set will be used for trials

    // Trial Config
    static showLessScreenInformation = true;           // Shows more/less detailed trial/block information on the screen
    static numBlocksTestSet = 1;                        // Amount of blocks for test set
    static numBlocksTrainingsSet = 1;                   // Amount of blocks for trainings set
    static shuffleTrialsInBlock = true;                 // Determines, if Trials should be shuffled (random position) in the current block
    static startSize = 10;                              // Size of the start element (always AxA)
    static repeatTrial = true;                          // Determines, if Trial needs to be repeated in current block due to fail
    static elementStrokeStyle = "black";                  // Element border color
    static startElementFillStyle = "rgba(211, 211, 211, 1.0)"; //gray
    static targetElementFillStyle = ["rgba(252,63,76,1.0)"]       // red
    static targetElementSelectionStyle = "rgba(0, 255, 0, 1.0)";     // green
    // Trial Config - Random Placement (in mm)
    static randomTrialPlacement = true;                // Determines if the trials will be placed on random positions of the canvas or in the middle
    static randomTrialPlacementToleranceXLeft = 3;     // Determines how much the element has to be away from the left canvas width (X) border
    static randomTrialPlacementToleranceXRight = 3;    // Determines how much the element has to be away from the right canvas width (X) border
    static randomTrialPlacementToleranceYUp = 10;       // Determines how much the element has to be away from the up canvas height (Y) border
    static randomTrialPlacementToleranceYDown = 3;     // Determines how much the element has to be away from the down canvas height (Y) border

    // Debug Flags
    static isDebug = false;                         // Enables more detailed logging
    static displayMiddlePointOfElement = false;     // Enables debug displaying of middle point of the elements
    static drawCanvasGrid = false;                  // Draws a grid all over the canvas for accurate debugging
    static drawToleranceElement = false;            // Draws the Tolerance element
    static showStartWindow = true;                 // Toggles display of start window


    static getRandomDirection1() {
       // const directions = ['up', 'up-left', 'up-right', 'down', 'down-right', 'down-left'];
       const directions = ['up','down'];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    static getRandomDirection2() {
       // const directions = ['right', 'right-up', 'right-down', 'left', 'left-down', 'left-up'];
       const directions = ['right', 'left'];
        return directions[Math.floor(Math.random() * directions.length)];
    }


    static trialsDataCategoriesTestSet = [];
    static trialsDataCategoriesTrainingsSet = [];
  

    // Circle: height gets automatically replaced with width
    // Category, targetWidth, targetHeight, Amplitude, trialDirection (e.g. up -> target is above start element)
    // Note: When adding the same Trial Category, the Trials will be treated as the same
    // (e.g. when the first trial got a miss, the counter will be also incremented for the other trial)
    static trialsDataCategoriesTestSet = [
       
 //1
["C1", 3, 3, 60,  Config.getRandomDirection1()],
["C2", 9, 3, 60,  Config.getRandomDirection1()],
["C3", 15, 3, 60,  Config.getRandomDirection1()],
["C4", 21, 3, 60,  Config.getRandomDirection1()],
["C5", 27, 3, 60,  Config.getRandomDirection1()],
["C6", 33, 3, 60,  Config.getRandomDirection1()],
["C7", 39, 3, 60,  Config.getRandomDirection1()],
["C8", 45, 3, 60,  Config.getRandomDirection1()],
["C9", 51, 3, 60,  Config.getRandomDirection1()],
["C10", 3, 3, 100,  Config.getRandomDirection1()],
["C11", 9, 3, 100,  Config.getRandomDirection1()],
["C12", 15, 3, 100,  Config.getRandomDirection1()],
["C13", 21, 3, 100,  Config.getRandomDirection1()],
["C14", 27, 3, 100,  Config.getRandomDirection1()],
["C15", 33, 3, 100,  Config.getRandomDirection1()],
["C16", 39, 3, 100,  Config.getRandomDirection1()],
["C17", 45, 3, 100,  Config.getRandomDirection1()],
["C18", 51, 3, 100,  Config.getRandomDirection1()],
["C19", 3, 3, 140,  Config.getRandomDirection1()],
["C20", 9, 3, 140,  Config.getRandomDirection1()],
["C21", 15, 3, 140,  Config.getRandomDirection1()],
["C22", 21, 3, 140,  Config.getRandomDirection1()],
["C23", 27, 3, 140,  Config.getRandomDirection1()],
["C24", 33, 3, 140,  Config.getRandomDirection1()],
["C25", 39, 3, 140,  Config.getRandomDirection1()],
["C26", 45, 3, 140,  Config.getRandomDirection1()],
["C27", 51, 3, 140,  Config.getRandomDirection1()],

//2


["C28", 5, 5, 60,  Config.getRandomDirection1()],
["C29", 11, 5, 60,  Config.getRandomDirection1()],
["C30", 17, 5, 60,  Config.getRandomDirection1()],
["C31", 23, 5, 60, Config.getRandomDirection1()],
["C32", 29, 5, 60,  Config.getRandomDirection1()],
["C33", 35, 5, 60,  Config.getRandomDirection1()],
["C34", 41, 5, 60,  Config.getRandomDirection1()],
["C35", 47, 5, 60,  Config.getRandomDirection1()],
["C36", 53, 5, 60,  Config.getRandomDirection1()],
["C37", 5, 5, 100,  Config.getRandomDirection1()],
["C38", 11, 5, 100,  Config.getRandomDirection1()],
["C39", 17, 5, 100,  Config.getRandomDirection1()],
["C40", 23, 5, 100,  Config.getRandomDirection1()],
["C41", 29, 5, 100, Config.getRandomDirection1()],
["C42", 35, 5, 100,  Config.getRandomDirection1()],
["C43", 41, 5, 100,  Config.getRandomDirection1()],
["C44", 47, 5, 100,  Config.getRandomDirection1()],
["C45", 53, 5, 100,  Config.getRandomDirection1()],
["C46", 5, 5, 140,  Config.getRandomDirection1()],
["C47", 11, 5, 140,  Config.getRandomDirection1()],
["C48", 17, 5, 140,  Config.getRandomDirection1()],
["C49", 23, 5, 140,  Config.getRandomDirection1()],
["C50", 29, 5, 140,  Config.getRandomDirection1()],
["C51", 35, 5, 140, Config.getRandomDirection1()],
["C52", 41, 5, 140,  Config.getRandomDirection1()],
["C53", 47, 5, 140,  Config.getRandomDirection1()],
["C54", 53, 5, 140,  Config.getRandomDirection1()],


//3
["C55", 7, 7, 60,  Config.getRandomDirection1()],
["C56", 13, 7, 60,  Config.getRandomDirection1()],
["C57", 19, 7, 60,  Config.getRandomDirection1()],
["C58", 25, 7, 60,  Config.getRandomDirection1()],
["C59", 31, 7, 60,  Config.getRandomDirection1()],
["C60", 37, 7, 60,  Config.getRandomDirection1()],
["C61", 43, 7, 60,  Config.getRandomDirection1()],
["C62", 49, 7, 60,  Config.getRandomDirection1()],
["C63", 55, 7, 60,  Config.getRandomDirection1()],
["C64", 7, 7, 100,  Config.getRandomDirection1()],
["C65", 13, 7, 100,  Config.getRandomDirection1()],
["C66", 19, 7, 100,  Config.getRandomDirection1()],
["C67", 25, 7, 100,  Config.getRandomDirection1()],
["C68", 31, 7, 100,  Config.getRandomDirection1()],
["C69", 37, 7, 100,  Config.getRandomDirection1()],
["C70", 43, 7, 100,  Config.getRandomDirection1()],
["C71", 49, 7, 100,  Config.getRandomDirection1()],
["C72", 55, 7, 100,  Config.getRandomDirection1()],
["C73", 7, 7, 140,  Config.getRandomDirection1()],
["C74", 13, 7, 140,  Config.getRandomDirection1()],
["C75", 19, 7, 140,  Config.getRandomDirection1()],
["C76", 25, 7, 140,  Config.getRandomDirection1()],
["C77", 31, 7, 140,  Config.getRandomDirection1()],
["C78", 37, 7, 140,  Config.getRandomDirection1()],
["C79", 43, 7, 140,  Config.getRandomDirection1()],
["C80", 49, 7, 140,  Config.getRandomDirection1()],
["C81", 55, 7, 140,  Config.getRandomDirection1()],


//4
["C82", 3, 3, 60, Config.getRandomDirection2()],
["C83", 3, 9, 60, Config.getRandomDirection2()],
["C84", 3, 15, 60, Config.getRandomDirection2()],
["C85", 3, 21, 60, Config.getRandomDirection2()],
["C86", 3, 27, 60, Config.getRandomDirection2()],
["C87", 3, 33, 60, Config.getRandomDirection2()],
["C88", 3, 39, 60, Config.getRandomDirection2()],
["C89", 3, 45, 60, Config.getRandomDirection2()],
["C90", 3, 51, 60, Config.getRandomDirection2()],
["C91", 3, 3, 100, Config.getRandomDirection2()],
["C92", 3, 9, 100, Config.getRandomDirection2()],
["C93", 3, 15, 100, Config.getRandomDirection2()],
["C94", 3, 21, 100, Config.getRandomDirection2()],
["C95", 3, 27, 100, Config.getRandomDirection2()],
["C96", 3, 33, 100, Config.getRandomDirection2()],
["C97", 3, 39, 100, Config.getRandomDirection2()],
["C98", 3, 45, 100, Config.getRandomDirection2()],
["C99", 3, 51, 100, Config.getRandomDirection2()],
["C100", 3, 3, 140, Config.getRandomDirection2()],
["C101", 3, 9, 140, Config.getRandomDirection2()],
["C102", 3, 15, 140, Config.getRandomDirection2()],
["C103", 3, 21, 140, Config.getRandomDirection2()],
["C104", 3, 27, 140, Config.getRandomDirection2()],
["C105", 3, 33, 140,Config.getRandomDirection2()],
["C106", 3, 39, 140, Config.getRandomDirection2()],
["C107", 3, 45, 140, Config.getRandomDirection2()],
["C108", 3, 51, 140, Config.getRandomDirection2()],


//5
["C109", 5, 5, 60, Config.getRandomDirection2()],
["C110", 5, 11, 60, Config.getRandomDirection2()],
["C111", 5, 17, 60, Config.getRandomDirection2()],
["C112", 5, 23, 60, Config.getRandomDirection2()],
["C113", 5, 29, 60, Config.getRandomDirection2()],
["C114", 5, 35, 60, Config.getRandomDirection2()],
["C115", 5, 41, 60, Config.getRandomDirection2()],
["C116", 5, 47, 60, Config.getRandomDirection2()],
["C117", 5, 53, 60, Config.getRandomDirection2()],
["C118", 5, 5, 100, Config.getRandomDirection2()],
["C119", 5, 11, 100, Config.getRandomDirection2()],
["C120", 5, 17, 100, Config.getRandomDirection2()],
["C121", 5, 23, 100, Config.getRandomDirection2()],
["C122", 5, 29, 100, Config.getRandomDirection2()],
["C123", 5, 35, 100, Config.getRandomDirection2()],
["C124", 5, 41, 100, Config.getRandomDirection2()],
["C125", 5, 47, 100, Config.getRandomDirection2()],
["C126", 5, 53, 100, Config.getRandomDirection2()],
["C127", 5, 5, 140, Config.getRandomDirection2()],
["C128", 5, 11, 140, Config.getRandomDirection2()],
["C129", 5, 17, 140, Config.getRandomDirection2()],
["C130", 5, 23, 140, Config.getRandomDirection2()],
["C131", 5, 29, 140, Config.getRandomDirection2()],
["C132", 5, 35, 140, Config.getRandomDirection2()],
["C133", 5, 41, 140, Config.getRandomDirection2()],
["C134", 5, 47, 140, Config.getRandomDirection2()],
["C135", 5, 53, 140, Config.getRandomDirection2()],


//6


["C136", 7, 7, 60, Config.getRandomDirection2()],
["C137", 7, 13, 60, Config.getRandomDirection2()],
["C138", 7, 19, 60, Config.getRandomDirection2()],
["C139", 7, 25, 60, Config.getRandomDirection2()],
["C140", 7, 31, 60, Config.getRandomDirection2()],
["C141", 7, 37, 60, Config.getRandomDirection2()],
["C142", 7, 43, 60, Config.getRandomDirection2()],
["C143", 7, 49, 60, Config.getRandomDirection2()],
["C144", 7, 55, 60, Config.getRandomDirection2()],
["C145", 7, 7, 100, Config.getRandomDirection2()],
["C146", 7, 13, 100, Config.getRandomDirection2()],
["C147", 7, 19, 100, Config.getRandomDirection2()],
["C148", 7, 25, 100, Config.getRandomDirection2()],
["C149", 7, 31, 100, Config.getRandomDirection2()],
["C150", 7, 37, 100, Config.getRandomDirection2()],
["C151", 7, 43, 100, Config.getRandomDirection2()],
["C152", 7, 49, 100, Config.getRandomDirection2()],
["C153", 7, 55, 100, Config.getRandomDirection2()],
["C154", 7, 7, 140, Config.getRandomDirection2()],
["C155", 7, 13, 140, Config.getRandomDirection2()],
["C156", 7, 19, 140, Config.getRandomDirection2()],
["C157", 7, 25, 140, Config.getRandomDirection2()],
["C158", 7, 31, 140, Config.getRandomDirection2()],
["C159", 7, 37, 140, Config.getRandomDirection2()],
["C160", 7, 43, 140, Config.getRandomDirection2()],
["C161", 7, 49, 140, Config.getRandomDirection2()],
["C162", 7, 55, 140, Config.getRandomDirection2()],


     ];
 
 
    static trialsDataCategoriesTrainingsSet = [
        ["C111", 5, 17, 60, Config.getRandomDirection2()],
        ["C15", 33, 3, 100,  Config.getRandomDirection1()],
        ["C47", 11, 5, 140,  Config.getRandomDirection1()],
        ["C139", 7, 25, 60, Config.getRandomDirection2()],
        ["C83", 3, 9, 60, Config.getRandomDirection2()],
        ["C147", 7, 19, 100, Config.getRandomDirection2()],
        ["C127", 5, 5, 140, Config.getRandomDirection2()],
        ["C56", 13, 7, 60,  Config.getRandomDirection1()],
    ];

    // Predefined Clock: 12 (up), 1 (up-right), 2 (right-up), 3 (right), 4 ...
    // Can be extended
    static clockDirections = { // Possible directions with specified angle
        'up': 90,
        'up-right': 120,
        'right-up': 150,
        'right': 180,
        'right-down': 210,
        'down-right': 240,
        'down': 270,
        'down-left': 300,
        'left-down': 330,
        'left': 360,
        'left-up': 30,
        'up-left': 60,
    };

    // Determines clickTolerance (in px) where click is not in target and not outside (marked as Tolerance Click)
    static clickTolerance(amplitude) {
        return mm2px((amplitude / 2));
    }
}
