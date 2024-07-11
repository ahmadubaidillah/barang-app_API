export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "doctors",
    [
      {
        name: "dr. Gladefa Inan Cesyo",
      },
      {
        name: "dr. Dian Caesara Putri",
      },
    ],
    {}
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("doctors", null, {});
}
