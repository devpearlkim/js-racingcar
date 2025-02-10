# 🏎️ Refactoring the Racing Game

## 1️⃣ Initial Problems in the Code

Before refactoring, the code had several issues:

- **❌ Domain logic & UI were not separated** → `console.log` was inside `Race` logic.
- **❌ Race logic was not separated, and progressRound directly called car.move()** -> encapsulating the logic in a Race class.
- **❌ `Car` instances were created inside `Race`** → Bad for dependency management.
- **❌ No centralized error handling** → Errors stopped execution without proper handling.

---

## 2️⃣ Goals of Refactoring

- ✅ **Separate concerns** (Race logic vs. UI logic)
- ✅ **Introduce a `Race` class** to encapsulate race logic
- ✅ **Move input handling to `ui/input.js`**
- ✅ **Improve error handling** to avoid abrupt crashes
- ✅ **Make code more testable with Jest**

---

## 3️⃣ Step-by-Step Refactoring

### **Step 1: Created a `Race` Class** 🏁

#### **Before:**

```javascript
export function startRace(carNames, TOTAL_ROUND) {
  const cars = carNames.map((name) => new Car(name));
  let round = 1;
  while (round <= TOTAL_ROUND) {
    progressRound(cars, round);
    round += 1;
  }
}

export function progressRound(cars, round) {
  console.log(`\nRound ${round}:`);

  cars.forEach((car) => car.move());
  printRoundResults(cars);
}
```

#### **After:**

```javascript
export class Race {}
```

🚀 **Why?**

- Now **Race logic is encapsulated** inside the `Race` class.
- We no longer create `Car` instances inside `Race` (dependency injection).

---

## 4️⃣ Results: Before vs. After

| Before (❌ Bad)     | After (✅ Good)           |
| ------------------- | ------------------------- |
| UI mixed with logic | UI in `output.js`         |
| No `Race` class     | `Race` encapsulates logic |
| Hard to test        | Improved testability      |

---

## 5️⃣ Next Steps & Future Improvements

- Add **random movement logic** (e.g., `Math.random()`)
- Implement **winner detection**
- Possibly switch to **React/Web UI instead of CLI**

---

## 6️⃣ Commit History for Reference

To track changes, see these commits:

- 🔗 **[Initial Code](https://github.com/devpearlkim/js-racingcar/commit/fdc54cee65d1ffb9ee24e05e2ae0968d352edc45)**
- 🔗 **[Refactored `Race` Class]()**
- 🔗 **[Separated UI Logic]()**
