class Student {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName.trim();
        this.lastName = lastName.trim();
        this.birthday = new Date(birthday);
        this.scores = [];
        this.progress = new Array(25).fill(null);


        this.fullName = `${this.firstName} ${this.lastName}`;
    }


    getAge() {
        return new Date().getFullYear() - this.birthday.getFullYear();
    }

    getAverageScore() {
        if (this.scores.length === 0) return 'Scores are null';

        const averageScore = this.scores.reduce((a, b) => (a + b)) / this.scores.length;
        return averageScore.toFixed(1);
    }

    getAverageProgress() {
        const averageProgress = this.progress.reduce((a, b) => (a + b)) / this.progress.length;
        return averageProgress.toFixed(1);
    }

    present() {
        this.setDay(true);
    }

    absent() {
        this.setDay(false);
    }


    summary() {
        console.log();
        const averageScore = this.getAverageScore();
        const averageProgress = this.getAverageProgress();
        if (averageScore >= 90 && averageProgress >= 0.9) {
            return 'Well done!!!'
        } else if (averageScore < 90 && averageScore >= 70 || averageProgress < 0.9 && averageProgress >= 0.5) {
            return 'Good but can better!';
        } else {
            return 'Radish!';
        }
    }


    setDay(presentOrAbsent) {
        if (this.progress[this.progress.length - 1] !== null || typeof presentOrAbsent !== 'boolean') return;

        let index = 0;
        for (let day of this.progress) {
            if (day === null) {
                this.progress[index] = presentOrAbsent;
                return true;
            }

            index++;
        }
    }

}


document.addEventListener('DOMContentLoaded', function () {
    const student1 = new Student('  Yura ', 'Vigovskyi  ', '05.02.2003');
    for (let index = 0; index < student1.progress.length; index++) {
        const randNum = Math.round(Math.random() * 4);
        if (randNum) {
            student1.scores.push(100)
            student1.present();
        } else {
            student1.absent();
        }
    }
    console.log(student1.summary());
    // console.log(student1);


    const student2 = new Student('    Kolya', 'Ponchicov', '02.02.1999');
    for (let index = 0; index < student2.progress.length; index++) {
        const randNum = Math.round(Math.random());
        if (randNum) {
            student2.scores.push(Math.round(Math.random() * 100))
            student2.present();
        } else {
            student2.absent();
        }
    }
    console.log(student2.summary());
    // console.log(student2);


    const student3 = new Student('    Kolya', 'Ponchicov', '02.02.1999');
    for (let index = 0; index < student3.progress.length; index++) {
        const randNum = Math.round(Math.random());
        if (randNum) {
            student3.scores.push(Math.round(Math.random() * 60))
            student3.present();
        } else {
            student3.absent();
        }
    }
    console.log(student3.summary());
    // console.log(student3);

});
