const mongoose = require('mongoose');

// Exercise schema
const exerciseSchema = new mongoose.Schema({
  name: String,
  type: String,
  muscle: String,
  equipment: String,
  difficulty: String,
  instructions: String,
});

const weightSchema = new mongoose.Schema({
  weight: Number,
  date: Date,
});

const SavedExerciseSchema = new mongoose.Schema({
  name: String,
  type: String,
  muscle: String,
  equipment: String,
  difficulty: String,
  instructions: String,
  sets: { type: Number, default: null },
  reps: { type: Number, default: null },
});

// REMOVE THIS WHEN DONE WITH PROJECT
// const sleepSchema = new mongoose.Schema({
//   quality: { type: Number, min: 0, max: 7 },
//   goal: { type: Number, default: 8 },
//   hours_slept: { type: Number, default: 8 },
//   sleep_aid: { type: String, default: 'none' },
//   disturbances: { type: Number, default: 0 },
//   notes: { type: String, default: 'none' },
//   begin_sleep: { type: Date, default: new Date() },
//   stop_sleep: { type: Date, default: null },
// });

const sleepSchema = new mongoose.Schema({
  in_progress: Boolean,
  quality: { type: Number, min: 0, max: 7 },
  goal: Number,
  hours_slept: Number,
  sleep_aid: String,
  disturbances: Number,
  disturbance_notes: String,
  begin_sleep: Date,
  stop_sleep: Date,
  user_id: Number,
});

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  nameFirst: String,
  nameLast: String,
  email: String,
  goal_weight: Number,
  weights: [weightSchema],
  saved_exercises: [SavedExerciseSchema],
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
const User = mongoose.model('User', userSchema);
const Sleep = mongoose.model('Sleep', sleepSchema);

module.exports = { Exercise, User, Sleep };
