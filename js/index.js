
    document.addEventListener("DOMContentLoaded", function () {
        const monthEl = document.getElementById("month");
        const yearEl = document.getElementById("year");
        const realDateEl = document.getElementById("real-date");
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let currentMonthIndex = 2; // March initially
        let currentYear = 2024;

        // Function to generate calendar days
        function generateCalendarDays() {
            const daysContainer = document.querySelector(".days");
            daysContainer.innerHTML = "";
            const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate(); // Get number of days in the current month
            const today = new Date().getDate(); // Get today's date
            const currentDayIndex = new Date().getDay(); // Get index of the current day

            for (let i = 1; i <= daysInMonth; i++) {
                const day = document.createElement("div");
                day.textContent = i < 10 ? '0' + i : i;
                if (i === today) {
                    day.classList.add("selected"); // Add special class to today's date
                }
                if (i === currentDayIndex) {
                    day.classList.add("current-day"); // Add special class to current day
                }
                daysContainer.appendChild(day);
            }
        }

        // Update real date above header
        function updateRealDate() {
            const currentDate = new Date();
            const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            realDateEl.textContent = formattedDate;
        }

        // Initial call to generate calendar days and update real date
        generateCalendarDays();
        updateRealDate();

        // Previous month button click event
        document.querySelector(".prev").addEventListener("click", function () {
            currentMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
            monthEl.textContent = monthNames[currentMonthIndex];
            if (currentMonthIndex === 11) {
                currentYear--;
                yearEl.textContent = currentYear;
            }
            generateCalendarDays();
            updateRealDate();
        });

        // Next month button click event
        document.querySelector(".next").addEventListener("click", function () {
            currentMonthIndex = currentMonthIndex === 11 ? 0 : currentMonthIndex + 1;
            monthEl.textContent = monthNames[currentMonthIndex];
            if (currentMonthIndex === 0) {
                currentYear++;
                yearEl.textContent = currentYear;
            }
            generateCalendarDays();
            updateRealDate();
        });

        // Add current day class to the current day in the weekends section
        const currentDayName = new Date().toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
        const currentDayElement = document.querySelector("." + currentDayName);
        if (currentDayElement) {
            currentDayElement.classList.add("current-day");
        }
    });



