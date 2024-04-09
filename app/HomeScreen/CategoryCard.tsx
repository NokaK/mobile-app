import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { CategoryModel } from "@/types/shared";

interface CategoryCardProps {
  category: CategoryModel;
  selectedCategory: number | null;
  onSelectCategory: (categoryId: number) => void;
}
const CategoryCard = ({
  category,
  selectedCategory,
  onSelectCategory,
}: CategoryCardProps) => {
  const handleCategoryClick = () => {
    onSelectCategory(category.id);
  };

  return (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        category.id === selectedCategory && styles.selectedCategoryItem,
      ]}
      onPress={handleCategoryClick}
    >
      <Text numberOfLines={1} style={styles.categoryText}>
        {category.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    marginRight: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cebcbc",
  },

  categoryText: {
    fontSize: 13,
    lineHeight: 20,
    textTransform: "uppercase",
    textAlign: "center",
  },
  selectedCategoryItem: {
    borderColor: "#101010",
  },
});
export default CategoryCard;
