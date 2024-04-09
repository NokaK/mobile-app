import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { CATEGORY_DATA } from "../../data/blogs";
import { CategoryModel } from "@/types/shared";
import CategoryCard from "./CategoryCard";
import { useCategoryContext } from "../../stores/CategoryContext";

const CategoryList = () => {
  const { selectedCategory, setSelectedCategory } = useCategoryContext();
  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  return (
    <View style={styles.categoryWrapper}>
      <ScrollView
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {CATEGORY_DATA.map((category: CategoryModel) => (
          <React.Fragment key={category.id}>
            <CategoryCard
              category={category}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});

export default CategoryList;
