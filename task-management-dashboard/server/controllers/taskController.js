const supabase = require("../supabase/supabaseClient");

const getTasks = async (req, res) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*");

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};

const createTask = async (req, res) => {
  const { title, description, status } = req.body;

  const { data, error } = await supabase
    .from("tasks")
    .insert([
      {
        title,
        description,
        status,
      },
    ]);

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};

const deleteTask = async (req, res) => {
  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", req.params.id);

  if (error) {
    return res.status(400).json(error);
  }

  res.json({
    message: "Task deleted",
  });
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};