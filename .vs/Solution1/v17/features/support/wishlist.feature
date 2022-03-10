Feature: Demo

  Scenario: Add to wishlist
    Given I add 4 different products to my wish list
    When I view my wishlist table
    Then I find total 4 selected items in my Wishlist
    When I search for lowest price product
    Then I am able to add the lowest price item to my cart
    Then I am able to verify the item in my cart
