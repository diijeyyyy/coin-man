class TouchListener {
    constructor(callback) {
      this.callback = callback;
      this.startX = 0;
      this.startY = 0;
      document.addEventListener("touchstart", this.handleTouchStart.bind(this), false);
      document.addEventListener("touchmove", this.handleTouchMove.bind(this), false);
      document.addEventListener("touchend", this.handleTouchEnd.bind(this), false);
    }
  
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    }
  
    handleTouchMove(event) {
      event.preventDefault(); // Prevent scrolling
    }
  
    handleTouchEnd(event) {
      const x = event.changedTouches[0].clientX;
      const y = event.changedTouches[0].clientY;
      const dx = x - this.startX;
      const dy = y - this.startY;
      // Adjust sensitivity as needed
      if (Math.abs(dx) > 50 || Math.abs(dy) > 50) {
        this.callback(dx, dy);
      }
    }
  
    unbind() {
      document.removeEventListener("touchstart", this.handleTouchStart);
      document.removeEventListener("touchmove", this.handleTouchMove);
      document.removeEventListener("touchend", this.handleTouchEnd);
    }
  }
  