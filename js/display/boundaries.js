class Boundary {
    constructor(top_len, bottom_len, left_len, right_len) {
        /*
        *_len is the length of the boundary in that direction.
        If set to 0, the boundary is not added
        */
        this.topBoundary = new Rectangle(0, 0, 0, windowWidth, top_len);
        this.bottomBoundary = new Rectangle(0, windowHeight - bottom_len, 0, windowWidth, bottom_len);
        this.leftBoundary = new Rectangle(0, 0, 0, left_len, windowHeight);
        this.rightBoundary = new Rectangle(windowWidth - right_len, 0, 0, right_len, windowHeight);
    }
  
    show() {
        this.topBoundary.show();
        this.bottomBoundary.show();
        this.leftBoundary.show();
        this.rightBoundary.show();
    }
}