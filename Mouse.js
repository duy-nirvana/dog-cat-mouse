function Mouse(name) {
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
};

module.exports = Mouse;